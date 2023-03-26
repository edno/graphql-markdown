const {
  graphql: { isUnionType, getTypeName },
} = require("@graphql-markdown/utils");

const { printSection } = require("../section");

const printUnionMetadata = (type, options) => {
  return printSection(type.getTypes(), "Possible types", {
    ...options,
    parentType: type.name,
  });
};

const printCodeUnion = (type) => {
  if (!isUnionType(type)) {
    return "";
  }

  let code = `union ${getTypeName(type)} = `;
  code += type
    .getTypes()
    .map((v) => getTypeName(v))
    .join(" | ");

  return code;
};

module.exports = {
  printUnionMetadata,
  printCodeUnion,
};
