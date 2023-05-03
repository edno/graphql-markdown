const {
  string: { escapeMDX },
  object: { hasProperty, isEmpty },
  graphql: { isDeprecated, getConstDirectiveMap },
} = require("@graphql-markdown/utils");

const { getCustomDirectiveDescription } = require("./directive");

const { MARKDOWN_EOP, NO_DESCRIPTION_TEXT } = require("./const/strings");

const printDeprecation = (type) => {
  if (isDeprecated(type) === false) {
    return "";
  }

  const reason =
    hasProperty(type, "deprecationReason") &&
    typeof type.deprecationReason === "string"
      ? ": " + escapeMDX(type.deprecationReason)
      : "";
  return `<Badge class="warning" text="DEPRECATED${reason}"/>${MARKDOWN_EOP}`;
};

const printCustomDirectives = (type, options) => {
  const constDirectiveMap = getConstDirectiveMap(type, options);

  if (typeof constDirectiveMap !== "object" || isEmpty(constDirectiveMap)) {
    return "";
  }

  const content = Object.values(constDirectiveMap)
    .map((constDirectiveOption) =>
      getCustomDirectiveDescription(type, constDirectiveOption),
    )
    .join(MARKDOWN_EOP);

  return `${content}${MARKDOWN_EOP}`;
};

const printDescription = (type, options, noText = NO_DESCRIPTION_TEXT) => {
  const replacement = typeof noText === "string" ? noText : NO_DESCRIPTION_TEXT;
  const description =
    hasProperty(type, "description") && typeof type.description === "string"
      ? escapeMDX(type.description)
      : replacement;
  const deprecation = printDeprecation(type);
  const customDirectives = printCustomDirectives(type, options);
  return `${deprecation}${customDirectives}${description}`;
};

module.exports = {
  printDeprecation,
  printDescription,
  printCustomDirectives,
};
