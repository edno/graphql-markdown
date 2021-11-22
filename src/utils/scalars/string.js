/**
 * String functions
 */

function _stringCaseBuilder(str, transformation, separator) {
  const hasTransformation = typeof transformation === "function";
  const stringCase = replaceDiacritics(str)
    .replace(/([a-z]+|\d+)([A-Z])/g, "$1 $2")
    .replace(/([a-z]+)(\d)/g, "$1 $2")
    .replace(/(\d+)([a-z])/g, "$1 $2")
    .split(/[^0-9A-Za-z]+/g)
    .map((word) => (hasTransformation ? transformation(word) : word))
    .join(separator);
  return prune(stringCase, separator);
}

function prune(str, char, { start = true, end = true } = {}) {
  const regex =
    (start ? `^${char}` : "") +
    (start && end ? "|" : "") +
    (end ? `${char}$` : "");
  return str.replace(new RegExp(`${regex}`), "");
}

function toSlug(str) {
  return kebabCase(str);
}

function toHTMLUnicode(char) {
  const unicodeChar = char.charCodeAt(0).toString(16).padStart(4, "0");
  return `&#x${unicodeChar.toUpperCase()};`;
}

function escapeMDX(str) {
  if (typeof str === "string") {
    return str.replace(/[<>{}]/g, toHTMLUnicode);
  }
  return str;
}

function firstUppercase(word) {
  const sliceUppercase = word.slice(0, 1).toUpperCase();
  const sliceDefaultCase = word.slice(1);
  return `${sliceUppercase}${sliceDefaultCase}`;
}

function capitalize(word) {
  return firstUppercase(word.toLowerCase());
}

// from https://stackoverflow.com/a/37511463
function replaceDiacritics(str) {
  return str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function startCase(str) {
  return _stringCaseBuilder(str, firstUppercase, " ");
}

function kebabCase(str) {
  return _stringCaseBuilder(str, (word) => word.toLowerCase(), "-");
}

module.exports = {
  capitalize,
  escapeMDX,
  firstUppercase,
  kebabCase,
  prune,
  replaceDiacritics,
  startCase,
  toHTMLUnicode,
  toSlug,
};
