const { buildSchema } = require("graphql");

jest.mock("@graphql-markdown/utils", () => {
  return {
    object: { hasProperty: jest.fn() },
    graphql: { getConstDirectiveMap: jest.fn() },
  };
});
const Utils = require("@graphql-markdown/utils");

jest.mock("../../src/link", () => {
  return {
    printLink: jest.fn(),
  };
});
const Link = require("../../src/link");

const {
  printCustomDirectives,
  printCustomDirective,
} = require("../../src/directive");

describe("directive", () => {
  const schema = buildSchema(`
    directive @testA(
      arg: ArgEnum = ARGA
    ) on OBJECT | FIELD_DEFINITION

    directive @testB(
      argA: Int!, 
      argB: [String!]
    ) on FIELD_DEFINITION

    enum ArgEnum {
      ARGA
      ARGB
      ARGC
    }

    type Test @testA {
      id: ID!
      fieldA: [String!] 
        @testA(arg: ARGC) 
        @testB(argA: 10, argB: ["testArgB"])
    }
  `);
  const type = schema.getType("Test");
  const descriptor = (directive) => `Test ${directive.name}`;
  const options = {
    customDirectives: {
      testA: {
        type: schema.getDirective("testA"),
        descriptor,
      },
      nonExist: {
        type: undefined,
        descriptor,
      },
    },
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("printCustomDirective()", () => {
    test("returns a MDX string of Directive component", () => {
      expect.assertions(1);

      const constDirectiveOption = options.customDirectives.testA;

      jest.spyOn(Link, "printLink").mockReturnValue("[`foo`](/bar)");
      jest.spyOn(Utils.object, "hasProperty").mockReturnValue(true);

      expect(printCustomDirective(type, constDirectiveOption, options))
        .toMatchInlineSnapshot(`
        "#### [\`foo\`](/bar)
        > Test testA
        > "
      `);
    });
  });

  describe("printCustomDirectives()", () => {
    test("returns empty string when config is not set", () => {
      expect.assertions(1);

      jest
        .spyOn(Utils.graphql, "getConstDirectiveMap")
        .mockReturnValue(undefined);
      jest.spyOn(Utils.object, "hasProperty").mockReturnValue(true);

      expect(printCustomDirectives(type, {})).toBe("");
    });

    test("returns a MDX string of Directive components", () => {
      expect.assertions(1);

      const mockConstDirectiveMap = {
        testA: options.customDirectives.testA,
      };
      jest
        .spyOn(Utils.graphql, "getConstDirectiveMap")
        .mockReturnValue(mockConstDirectiveMap);
      jest.spyOn(Link, "printLink").mockReturnValue("[`foo`](/bar)");
      jest.spyOn(Utils.object, "hasProperty").mockReturnValue(true);

      expect(printCustomDirectives(type, options)).toMatchInlineSnapshot(`
        "### Directives

        #### [\`foo\`](/bar)
        > Test testA
        > 

        "
      `);
    });
  });
});
