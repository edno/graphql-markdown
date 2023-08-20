/* eslint-disable @typescript-eslint/no-var-requires */
const { getTypeDirectiveValues } = require("@graphql-markdown/graphql");
const {
  directiveDescriptor,
  directiveTag,
} = require("@graphql-markdown/helpers");

module.exports = {
  id: "schema_with_grouping",
  schema: "data/schema_with_grouping.graphql",
  rootPath: "./docs",
  linkRoot: "/examples/default",
  baseURL: ".",
  diffMethod: "SCHEMA-HASH",
  loaders: { GraphQLFileLoader: "@graphql-tools/graphql-file-loader" },
  groupByDirective: {
    directive: "doc",
    field: "category",
    fallback: "Common",
  },
  docOptions: {
    pagination: true,
    toc: true,
  },
  printTypeOptions: {
    parentTypePrefix: false,
    relatedTypeSection: false,
    typeBadges: true,
  },
  customDirective: {
    beta: {
      tag: (directive) => ({
        text: directive?.name?.toUpperCase(),
        classname: "badge--danger",
      }),
    },
    auth: {
      descriptor: (directive, type) =>
        directiveDescriptor(
          directive,
          type,
          "This requires the current user to be in `${requires}` role.",
        ),
      tag: directiveTag,
    },
    complexity: {
      descriptor: (directive, type) => {
        const { value, multipliers } = getTypeDirectiveValues(directive, type);
        const multiplierDescription = multipliers
          ? ` per ${multipliers.map((v) => `\`${v}\``).join(", ")}`
          : "";
        return `This has an additional cost of \`${value}\` points${multiplierDescription}.`;
      },
      tag: directiveTag,
    },
  },
};
