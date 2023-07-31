import { join } from "node:path";
import { tmpdir } from "node:os";

import type { CustomDirective, CustomDirectiveOptions, DirectiveName, GroupByDirectiveOptions, LoaderOption, PackageName, UnnormalizedTypeDefPointer } from "@graphql-markdown/utils";

import { loadConfiguration } from "./graphql-config";
export const DOCS_URL = "https://graphql-markdown.github.io/docs";
export const PACKAGE_NAME = "@graphql-markdown/docusaurus";
export const ASSETS_LOCATION = join(__dirname, "../assets/");

export type ConfigDocOptions = {
  index?: boolean
  pagination?: boolean
  toc?: boolean
}

export enum DeprecatedOption {
  DEFAULT = "default",
  GROUP = "group",
  SKIP = "skip"
}
export type TypeDeprecatedOption = `${DeprecatedOption}`;

export type ConfigPrintTypeOptions = {
  codeSection?: boolean
  deprecated?: TypeDeprecatedOption,
  parentTypePrefix?: boolean
  relatedTypeSection?: boolean
  typeBadges?: boolean
}

export enum DiffMethod {
  NONE = "NONE",
  FORCE = "FORCE"
}
export type TypeDiffMethod = string | `${DiffMethod}`

type Pointer = string | UnnormalizedTypeDefPointer;

export type ConfigOptions = {
  baseURL?: string
  customDirective?: CustomDirective
  diffMethod?: TypeDiffMethod
  docOptions?: ConfigDocOptions
  groupByDirective?: GroupByDirectiveOptions
  homepage?: string
  linkRoot?: string
  loaders?: LoaderOption
  pretty?: boolean
  printer?: PackageName
  printTypeOptions?: ConfigPrintTypeOptions
  rootPath?: string
  schema?: Pointer
  tmpDir?: string
  skipDocDirective?: DirectiveName[] | DirectiveName
}

export type CliOptions = {
  schema?: Pointer
  root?: string
  base?: string
  link?: string
  homepage?: string
  noCode?: boolean
  noPagination?: boolean
  noParentType?: boolean
  noRelatedType?: boolean
  noToc?: boolean
  noTypeBadges?: boolean
  index?: boolean
  force?: boolean
  diff?: string
  tmp?: string
  groupByDirective?: string
  skip?: string[] | string
  deprecated?: TypeDeprecatedOption
  pretty?: boolean
}

export type Options = Omit<ConfigOptions, "homepage" | "pretty" | "schema" | "rootPath"> & { 
  homepageLocation: string, 
  outputDir: string, 
  prettify: boolean, 
  schemaLocation: Pointer,
  printer: PackageName,
  tmpDir: string,
  baseURL: string,
  linkRoot: string,
  skipDocDirective: DirectiveName[],
  docOptions: Required<ConfigDocOptions>,
  printTypeOptions: Required<ConfigPrintTypeOptions>
};

export const DEFAULT_OPTIONS: Required<Omit<ConfigOptions, "groupByDirective" | "customDirective" | "loaders">> & { groupByDirective: GroupByDirectiveOptions | undefined, customDirective: CustomDirective | undefined, loaders: LoaderOption | undefined } = {
  baseURL: "schema",
  customDirective: undefined,
  diffMethod: DiffMethod.NONE as TypeDiffMethod,
  docOptions: {
    index: false,
    pagination: true,
    toc: true,
  },
  groupByDirective: undefined,
  homepage: join(ASSETS_LOCATION, "generated.md"),
  linkRoot: "/",
  loaders: undefined,
  pretty: false,
  printer: "@graphql-markdown/printer-legacy" as PackageName,
  printTypeOptions: {
    codeSection: true,
    deprecated: DeprecatedOption.DEFAULT as TypeDeprecatedOption,
    parentTypePrefix: true,
    relatedTypeSection: true,
    typeBadges: true,
  },
  rootPath: "./docs",
  schema: "./schema.graphql",
  tmpDir: join(tmpdir(), PACKAGE_NAME),
  skipDocDirective: [],
};

export async function buildConfig(configFileOpts?: ConfigOptions, cliOpts?: CliOptions, id?: string): Promise<Options> {
  if (typeof cliOpts === "undefined" || cliOpts === null) {
    cliOpts = {};
  }

  const graphqlConfig = await loadConfiguration(id);
  const config: ConfigOptions = { ...DEFAULT_OPTIONS, ...graphqlConfig, ...configFileOpts };

  const baseURL = cliOpts.base ?? config.baseURL!;
  const skipDocDirective = getSkipDocDirectives(cliOpts, config);

  return {
    baseURL,
    customDirective: getCustomDirectives(
      config.customDirective,
      skipDocDirective,
    ),
    diffMethod: getDiffMethod(cliOpts.diff ?? config.diffMethod!, cliOpts.force),
    docOptions: getDocOptions(cliOpts, config.docOptions),
    groupByDirective:
      parseGroupByOption(cliOpts.groupByDirective) || config.groupByDirective,
    homepageLocation: cliOpts.homepage ?? config.homepage ?? DEFAULT_OPTIONS.homepage,
    linkRoot: (cliOpts.link ?? config.linkRoot) ?? DEFAULT_OPTIONS.linkRoot,
    loaders: config.loaders,
    outputDir: join(cliOpts.root ?? config.rootPath!, baseURL),
    prettify: cliOpts.pretty ?? config.pretty ?? DEFAULT_OPTIONS.pretty,
    printer: (config.printer ?? DEFAULT_OPTIONS.printer!) as PackageName,
    printTypeOptions: getPrintTypeOptions(cliOpts, config.printTypeOptions),
    schemaLocation: cliOpts.schema ?? config.schema ?? DEFAULT_OPTIONS.schema,
    skipDocDirective,
    tmpDir: cliOpts.tmp ?? config.tmpDir ?? DEFAULT_OPTIONS.tmpDir,
  };
}

export function getCustomDirectives(customDirectiveOptions?: CustomDirective, skipDocDirective?: DirectiveName[]): CustomDirective | undefined {
  if (
    typeof customDirectiveOptions === "undefined" ||
      Object.keys(customDirectiveOptions).length === 0 ||
      typeof skipDocDirective === "undefined" ||
      skipDocDirective.length === 0
  ) {
    return undefined;
  }

  for (const [name, option] of Object.entries(customDirectiveOptions)) {
    if (skipDocDirective.includes(name as DirectiveName)) {
      delete customDirectiveOptions[name as DirectiveName];
    } else if (
      (!("descriptor" in (option as CustomDirectiveOptions)) ||
        typeof (<CustomDirectiveOptions>option).descriptor !== "function") &&
      (!("tag" in (option as CustomDirectiveOptions)) || typeof (<CustomDirectiveOptions>option).tag !== "function")
    ) {
      throw new Error(
        `Wrong format for plugin custom directive "${name}".\nPlease refer to ${DOCS_URL}/advanced/custom-directive`,
      );
    }
  }

  return Object.keys(customDirectiveOptions).length === 0
    ? undefined
    : customDirectiveOptions;
}

export function getDiffMethod(diff: TypeDiffMethod, force: boolean = false) : TypeDiffMethod {
  return force ? DiffMethod.FORCE : diff;
}

export function getDocOptions(cliOpts?: CliOptions, configOptions?: ConfigDocOptions): Required<ConfigDocOptions> {
  return {
    pagination: (!cliOpts?.noPagination && configOptions?.pagination) ?? DEFAULT_OPTIONS.docOptions.pagination!,
    toc: (!cliOpts?.noToc && configOptions?.toc) ?? DEFAULT_OPTIONS.docOptions.toc!,
    index: (cliOpts?.index || configOptions?.index) ?? DEFAULT_OPTIONS.docOptions.index!,
  };
}

export function getPrintTypeOptions(cliOpts?: CliOptions, configOptions?: ConfigPrintTypeOptions): Required<ConfigPrintTypeOptions> {
  return {
    codeSection: (!cliOpts?.noCode && configOptions?.codeSection) ?? DEFAULT_OPTIONS.printTypeOptions.codeSection!,
    deprecated:
      cliOpts?.deprecated ??
      configOptions?.deprecated ??
      DEFAULT_OPTIONS.printTypeOptions.deprecated!,
    parentTypePrefix: (!cliOpts?.noParentType && configOptions?.parentTypePrefix) ?? DEFAULT_OPTIONS.printTypeOptions.parentTypePrefix!,
    relatedTypeSection:
      (!cliOpts?.noRelatedType && configOptions?.relatedTypeSection) ?? DEFAULT_OPTIONS.printTypeOptions.relatedTypeSection!,
    typeBadges: (!cliOpts?.noTypeBadges && configOptions?.typeBadges) ?? DEFAULT_OPTIONS.printTypeOptions.typeBadges!,
  };
}

export function getSkipDocDirectives(cliOpts?: CliOptions, configFileOpts?: Pick<ConfigOptions, "skipDocDirective" | "printTypeOptions">): DirectiveName[] {
  const directiveList: DirectiveName[] = [].concat(
    (cliOpts?.skip ?? []) as never[],
    (configFileOpts?.skipDocDirective ?? []) as never[],
  );

  const skipDirectives = directiveList.map((option) =>
    getSkipDocDirective(option),
  );

  if (
    (typeof configFileOpts !== undefined && "printTypeOptions" in configFileOpts! &&
      configFileOpts.printTypeOptions?.deprecated === DeprecatedOption.SKIP) ||
    (typeof cliOpts !== undefined && "deprecated" in cliOpts! &&
      cliOpts?.deprecated === DeprecatedOption.SKIP)
  ) {
    skipDirectives.push("deprecated" as DirectiveName);
  }

  return skipDirectives;
}

export function getSkipDocDirective(option: DirectiveName): DirectiveName {
  const OPTION_REGEX = /^@(?<directive>\w+)$/;

  if (typeof option !== "string") {
    throw new Error(`Invalid "${option}"`);
  }

  const parsedOption = OPTION_REGEX.exec(option);

  if (typeof parsedOption === "undefined" || parsedOption == null) {
    throw new Error(`Invalid "${option}"`);
  }

  return parsedOption.groups?.directive as DirectiveName;
}

export function parseGroupByOption(groupOptions: unknown): GroupByDirectiveOptions | undefined {
  const DEFAULT_GROUP = "Miscellaneous";
  const OPTION_REGEX =
    /^@(?<directive>\w+)\((?<field>\w+)(?:\|=(?<fallback>\w+))?\)/;

  if (typeof groupOptions !== "string") {
    return undefined;
  }

  const parsedOptions = OPTION_REGEX.exec(groupOptions);

  if (typeof parsedOptions === "undefined" || parsedOptions == null) {
    throw new Error(`Invalid "${groupOptions}"`);
  }

  if (!("groups" in parsedOptions)) {
    return undefined
  }

  const { directive, field, fallback = DEFAULT_GROUP } = parsedOptions.groups as GroupByDirectiveOptions;
  return { directive, field, fallback } as GroupByDirectiveOptions;
}
