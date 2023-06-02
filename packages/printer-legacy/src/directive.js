const {
  graphql: { getConstDirectiveMap },
} = require("@graphql-markdown/utils");
const {
  HEADER_SECTION_LEVEL,
  HEADER_SECTION_SUB_LEVEL,
  MARKDOWN_EOL,
  MARKDOWN_EOP,
} = require("./const/strings");
const { printLink } = require("./link");
const { printBadge } = require("./badge");

function printCustomDirectives(type, options) {
  const constDirectiveMap = getConstDirectiveMap(type, options);

  if (
    typeof constDirectiveMap !== "object" ||
    !Object.keys(constDirectiveMap).length
  ) {
    return "";
  }

  const directives = Object.values(constDirectiveMap)
    .map((constDirectiveOption) =>
      printCustomDirective(type, constDirectiveOption, options),
    )
    .filter((value) => typeof value !== "undefined");

  if (directives.length === 0) {
    return "";
  }

  const content = directives.join(MARKDOWN_EOP);

  return `${HEADER_SECTION_LEVEL} Directives${MARKDOWN_EOP}${content}${MARKDOWN_EOP}`;
}

function printCustomDirective(type, constDirectiveOption, options) {
  const typeNameLink = printLink(constDirectiveOption.type, {
    ...options,
    withAttributes: false,
  });
  const description = getCustomDirectiveResolver(
    "descriptor",
    type,
    constDirectiveOption,
  );

  if (typeof description === "undefined") {
    return undefined;
  }

  return `${HEADER_SECTION_SUB_LEVEL} ${typeNameLink}${MARKDOWN_EOL}> ${description}${MARKDOWN_EOL}> `;
}

function getCustomTags(type, options) {
  const constDirectiveMap = getConstDirectiveMap(type, options);

  if (
    typeof constDirectiveMap !== "object" ||
    !Object.keys(constDirectiveMap).length
  ) {
    return [];
  }

  return Object.values(constDirectiveMap)
    .map((constDirectiveOption) =>
      getCustomDirectiveResolver("tag", type, constDirectiveOption),
    )
    .filter((value) => typeof value !== "undefined");
}

const printCustomTags = (type, options) => {
  const badges = getCustomTags(type, options);

  if (badges.length === 0) {
    return "";
  }

  return badges.map((badge) => printBadge(badge)).join(" ");
};

function getCustomDirectiveResolver(
  resolver,
  type,
  constDirectiveOption,
  fallback = undefined,
) {
  if (
    typeof constDirectiveOption === "undefined" ||
    typeof constDirectiveOption[resolver] !== "function"
  ) {
    return fallback;
  }

  return constDirectiveOption[resolver](constDirectiveOption.type, type);
}

module.exports = {
  getCustomDirectiveResolver,
  getCustomTags,
  printCustomDirective,
  printCustomDirectives,
  printCustomTags,
};
