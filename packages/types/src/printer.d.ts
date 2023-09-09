import type {
  Maybe,
  TypeDeprecatedOption,
  SchemaEntitiesGroupMap,
  DirectiveName,
  GraphQLSchema,
  CustomDirectiveMap,
  ConfigPrintTypeOptions,
} from ".";

export type RootTypeName =
  | "DIRECTIVE"
  | "ENUM"
  | "INPUT"
  | "INTERFACE"
  | "MUTATION"
  | "OPERATION"
  | "QUERY"
  | "SCALAR"
  | "SUBSCRIPTION"
  | "TYPE"
  | "UNION";
export type TypeLocale = string | { singular: string; plural: string };
export type RootTypeLocale = {
  [name in RootTypeName]: TypeLocale;
};

export interface PrinterConfigPrintTypeOptions {
  codeSection?: boolean;
  deprecated?: TypeDeprecatedOption;
  parentTypePrefix?: boolean;
  relatedTypeSection?: boolean;
  typeBadges?: boolean;
}

export interface CollapsibleOption {
  dataOpen: string;
  dataClose: string;
}

export interface PrintTypeHeaderOptions {
  toc?: boolean;
  pagination?: boolean;
}

export interface PrintTypeOptions {
  basePath: string;
  codeSection?: Maybe<boolean>;
  collapsible?: Maybe<CollapsibleOption>;
  customDirectives?: Maybe<CustomDirectiveMap>;
  deprecated?: Maybe<TypeDeprecatedOption>;
  groups?: Maybe<SchemaEntitiesGroupMap>;
  level?: Maybe<SectionLevelValue>;
  parentType?: Maybe<string>;
  parentTypePrefix?: boolean;
  relatedTypeSection?: boolean;
  schema?: Maybe<GraphQLSchema>;
  skipDocDirective?: Maybe<DirectiveName[]>;
  typeBadges?: boolean;
  withAttributes?: boolean;
  header?: Maybe<PrintTypeHeaderOptions>;
}

export type SectionLevelValue = string & {
  _opaque: typeof SECTION_LEVEL_VALUE;
};
declare const SECTION_LEVEL_VALUE: unique symbol;
export type SectionLevel = SectionLevelValue | "####" | "#####";

export interface Badge {
  text: TypeLocale | string;
  classname: string;
}

export interface TypeLink {
  text: string;
  url: string;
}

export type PrintLinkOptions = Partial<PrintTypeOptions> &
  Pick<
    PrintTypeOptions,
    | "basePath"
    | "deprecated"
    | "groups"
    | "parentType"
    | "parentTypePrefix"
    | "skipDocDirective"
    | "withAttributes"
  >;

export type PrintDirectiveOptions = Partial<PrintTypeOptions> &
  Pick<PrintTypeOptions, "basePath" | "deprecated" | "parentTypePrefix">;

export abstract class IPrinter {
  static init(
    schema: Maybe<GraphQLSchema>,
    baseURL: string,
    linkRoot: string,
    options: Maybe<PrinterOptions>,
  ): void;
  static printHeader(
    id: string,
    title: string,
    options: PrinterConfig & PrinterOptions,
  ): string;
  static printDescription(
    type: unknown,
    options: PrinterConfig & PrinterOptions,
    noText: string,
  ): string;
  static printCode(
    type: unknown,
    options: PrinterConfig & PrinterOptions,
  ): string;
  static printCustomDirectives(
    type: unknown,
    options: PrinterConfig & PrinterOptions,
  ): MDXString;
  static printCustomTags(
    type: unknown,
    options: PrinterConfig & PrinterOptions,
  ): MDXString;
  static printTypeMetadata(
    type: unknown,
    options: PrinterConfig & PrinterOptions,
  ): MDXString;
  static printRelations(
    type: unknown,
    options: PrinterConfig & PrinterOptions,
  ): MDXString;
  static printType(
    name: string,
    type: unknown,
    options: Maybe<Partial<PrinterConfig & PrinterOptions>>,
  ): MDXString;
}
export type Printer = typeof IPrinter;

export interface PrinterConfig {
  schema: Maybe<GraphQLSchema>;
  baseURL: string;
  linkRoot: string;
}

export interface PrinterOptions {
  customDirectives?: Maybe<CustomDirectiveMap>;
  deprecated?: Maybe<TypeDeprecatedOption>;
  groups?: Maybe<SchemaEntitiesGroupMap>;
  printTypeOptions?: Maybe<ConfigPrintTypeOptions>;
  skipDocDirective?: Maybe<DirectiveName[]>;
}
