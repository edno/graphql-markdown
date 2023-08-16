// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require("node:path");

module.exports = {
  root: true,
  overrides: [
    {
      files: ["**/*.ts"],
      env: {
        node: true,
        es6: true,
        jest: true,
        "jest/globals": true,
      },
      plugins: [
        "jest",
        "prettier",
        "@typescript-eslint",
        "eslint-plugin-tsdoc",
      ],
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            project: ["./tsconfig.json", "./packages/*/tsconfig.json"],
          },
        },
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: join(__dirname, ".."),
        project: ["./packages/*/tsconfig.test.json"],
      },
      rules: {
        "prettier/prettier": "error",
        "brace-style": [
          "error",
          "1tbs",
          {
            allowSingleLine: false,
          },
        ],
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/consistent-generic-constructors": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-duplicate-type-constituents": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-redundant-type-constituents": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-enum-comparison": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/sort-type-constituents": "error",
        "@typescript-eslint/unified-signatures": "error",
        "no-return-await": "off",
        "tsdoc/syntax": "warn",
        // "@typescript-eslint/member-ordering": "error",
        // "@typescript-eslint/naming-convention": "error",
        // "@typescript-eslint/no-unsafe-return": "error",
        // "@typescript-eslint/prefer-nullish-coalescing": "error",
        // "@typescript-eslint/prefer-optional-chain": "error",
      },
    },
    {
      files: ["**/*.mdx?"],
      plugins: ["prettier"],
      rules: {
        "prettier/prettier": "error",
        "brace-style": [
          "error",
          "1tbs",
          {
            allowSingleLine: false,
          },
        ],
      },
      extends: ["plugin:mdx/recommended", "eslint:recommended", "prettier"],
      settings: {
        "mdx/code-blocks": true,
        "mdx/language-mapper": {},
      },
    },
    {
      files: ["**/*.js"],
      env: {
        node: true,
        es6: true,
        jest: true,
        "jest/globals": true,
      },
      plugins: ["jest", "prettier", "@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "prettier",
        "plugin:jest/recommended",
        "plugin:jest/style",
      ],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "prettier/prettier": "error",
        "brace-style": [
          "error",
          "1tbs",
          {
            allowSingleLine: false,
          },
        ],
      },
    },
    {
      files: ["**/*.json"],
      extends: [
        "eslint:recommended",
        "prettier",
        "plugin:jsonc/recommended-with-jsonc",
      ],
      parser: "jsonc-eslint-parser",
      rules: {
        "prettier/prettier": "error",
        "brace-style": [
          "error",
          "1tbs",
          {
            allowSingleLine: false,
          },
        ],
      },
    },
    {
      files: ["**/*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      extends: ["eslint:recommended", "prettier"],
      rules: {
        "prettier/prettier": "error",
        "brace-style": [
          "error",
          "1tbs",
          {
            allowSingleLine: false,
          },
        ],
      },
    },
  ],
};
