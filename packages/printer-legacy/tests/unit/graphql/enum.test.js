const { GraphQLInt, GraphQLEnumType, GraphQLScalarType } = require("graphql");

const {
  printCodeEnum,
  printEnumMetadata,
} = require("../../../src/graphql/enum");

const {
  DEFAULT_OPTIONS,
  OPTION_DEPRECATED,
} = require("../../../src/const/options");

describe("enum", () => {
  const type = new GraphQLEnumType({
    name: "EnumTypeName",
    values: {
      one: { value: "one" },
      two: { value: "two", deprecationReason: "Deprecated" },
    },
  });

  describe("printEnumMetadata()", () => {
    test("returns enum metadata", () => {
      expect.hasAssertions();

      const metadata = printEnumMetadata(type, DEFAULT_OPTIONS);

      expect(metadata).toMatchInlineSnapshot(`
        "### Values

        #### [<code style={{ fontWeight: 'normal' }}>EnumTypeName.<b>one</b></code>](#)  
        > 
        > 
        > 
        > 

        #### [<code style={{ fontWeight: 'normal' }}>EnumTypeName.<b>two</b></code>](#) <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> 
        > 
        > 
        > :::caution DEPRECATED
        > Deprecated
        > :::
        > 
        > 
        > 

        "
      `);
    });

    test("returns enum metadata with grouped deprecated", () => {
      expect.hasAssertions();

      const metadata = printEnumMetadata(type, {
        ...DEFAULT_OPTIONS,
        printDeprecated: OPTION_DEPRECATED.GROUP,
      });

      expect(metadata).toMatchInlineSnapshot(`
        "### Values

        #### [<code style={{ fontWeight: 'normal' }}>EnumTypeName.<b>one</b></code>](#)  
        > 
        > 
        > 
        > 

         

        <Details dataOpen={<><span className="deprecated">Hide deprecated</span></>} dataClose={<><span className="deprecated">Show deprecated</span></>}>

        #### [<code style={{ fontWeight: 'normal' }}>EnumTypeName.<b>two</b></code>](#) <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> 
        > 
        > 
        > :::caution DEPRECATED
        > Deprecated
        > :::
        > 
        > 
        > 

        </Details>

        "
      `);
    });
  });

  describe("printCodeEnum()", () => {
    test("returns enum code structure", () => {
      expect.hasAssertions();

      const code = printCodeEnum(type);

      expect(code).toMatchInlineSnapshot(`
        "enum EnumTypeName {
          one
          two @deprecated
        }"
      `);
    });

    test("returns enum code structure without deprecated if SKIP", () => {
      expect.hasAssertions();

      const code = printCodeEnum(type, { printDeprecated: "skip" });

      expect(code).toMatchInlineSnapshot(`
        "enum EnumTypeName {
          one
        }"
      `);
    });

    test("returns empty string if not enum type", () => {
      expect.hasAssertions();

      const scalarType = new GraphQLScalarType({
        name: "ScalarTypeName",
        type: GraphQLInt,
      });

      const code = printCodeEnum(scalarType);

      expect(code).toBe("");
    });
  });
});
