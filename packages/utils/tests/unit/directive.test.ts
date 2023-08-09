import type { GraphQLDirective, GraphQLNamedType } from "graphql";

import { buildSchema } from "graphql";

import type { DirectiveName, CustomDirective } from "@graphql-markdown/types";

import {
  getCustomDirectives,
  getCustomDirectiveOptions,
  isCustomDirective,
} from "../../src/directive";

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
  `);

  const descriptor = (
    directiveType: GraphQLNamedType,
    constDirectiveType: GraphQLDirective,
  ): string => `Test ${constDirectiveType.name}`;
  const wildcard = (
    directiveType: GraphQLNamedType,
    constDirectiveType: GraphQLDirective,
  ): string => `TestWildcard ${constDirectiveType.name}`;
  const customDirectiveOptions = {
    testA: {
      descriptor,
    },
    nonExist: {
      descriptor,
    },
  };

  const schemaMap = {
    directives: {
      testA: schema.getDirective("testA"),
      testB: schema.getDirective("testB"),
    },
  };

  describe("isCustomDirective()", () => {
    test("returns true if directive name listed in customDirectives", () => {
      expect.assertions(1);

      expect(
        isCustomDirective("testA" as DirectiveName, customDirectiveOptions),
      ).toBeTruthy();
    });

    test("returns true if customDirective has wildcard", () => {
      expect.assertions(1);

      expect(
        isCustomDirective("testB" as DirectiveName, {
          ["*" as DirectiveName]: {},
        }),
      ).toBeTruthy();
    });

    test("returns false if no match", () => {
      expect.assertions(1);

      expect(
        isCustomDirective("testC" as DirectiveName, customDirectiveOptions),
      ).toBeFalsy();
    });
  });

  describe("getCustomDirectiveOptions()", () => {
    test("returns specific description if match", () => {
      expect.assertions(2);

      const descriptorDirective = getCustomDirectiveOptions(
        "testA" as DirectiveName,
        {
          ["*" as DirectiveName]: { descriptor: wildcard } as CustomDirective,
          ...customDirectiveOptions,
        },
      )!;

      expect(descriptorDirective.descriptor).toBeDefined();

      expect(
        descriptorDirective.descriptor!(undefined, schemaMap.directives.testA),
      ).toBe("Test testA");
    });

    test("returns wildcard description if wildcard match", () => {
      expect.assertions(2);

      const descriptorDirective = getCustomDirectiveOptions(
        "testB" as DirectiveName,
        {
          ["*" as DirectiveName]: { descriptor: wildcard } as CustomDirective,
          ...customDirectiveOptions,
        },
      )!;

      expect(descriptorDirective.descriptor).toBeDefined();

      expect(
        descriptorDirective.descriptor!(undefined, schemaMap.directives.testB),
      ).toBe("TestWildcard testB");
    });

    test("returns undefined if no match", () => {
      expect.assertions(1);

      const descriptorDirective = getCustomDirectiveOptions(
        "testC" as DirectiveName,
        customDirectiveOptions,
      );

      expect(descriptorDirective).toBeUndefined();
    });
  });

  describe("getCustomDirectives()", () => {
    test("returns undefined if customDirectiveOptions not defined", () => {
      expect.assertions(1);

      expect(getCustomDirectives(schemaMap)).toBeUndefined();
    });

    test("returns undefined if schema map contains no directive definitions", () => {
      expect.assertions(1);

      expect(getCustomDirectives({}, customDirectiveOptions)).toBeUndefined();
    });

    test("returns matching custom directives in schema", () => {
      expect.assertions(2);

      const customDirectives = getCustomDirectives(
        schemaMap,
        customDirectiveOptions,
      )!;

      expect(customDirectives).toMatchSnapshot();

      expect(
        customDirectives["testA" as DirectiveName].descriptor!(
          undefined,
          schemaMap.directives.testA,
        ),
      ).toBe("Test testA");
    });

    test("returns undefined if no match", () => {
      expect.assertions(1);

      expect(getCustomDirectives(schemaMap, {})).toBeUndefined();
    });

    test("returns all directives if wildcard", () => {
      expect.assertions(3);

      const customDirectives = getCustomDirectives(schemaMap, {
        ["*" as DirectiveName]: { descriptor: wildcard } as CustomDirective,
      })!;

      expect(customDirectives).toMatchSnapshot();

      expect(
        customDirectives["testA" as DirectiveName].descriptor!(
          undefined,
          schemaMap.directives.testA,
        ),
      ).toBe("TestWildcard testA");

      expect(
        customDirectives["testB" as DirectiveName].descriptor!(
          undefined,
          schemaMap.directives.testB,
        ),
      ).toBe("TestWildcard testB");
    });

    test("returns all directives if wildcard without overriding specifics", () => {
      expect.assertions(3);

      const customDirectives = getCustomDirectives(schemaMap, {
        ["*" as DirectiveName]: { descriptor: wildcard } as CustomDirective,
        ...customDirectiveOptions,
      })!;

      expect(customDirectives).toMatchSnapshot();

      expect(
        customDirectives["testA" as DirectiveName].descriptor!(
          undefined,
          schemaMap.directives.testA,
        ),
      ).toBe("Test testA");

      expect(
        customDirectives["testB" as DirectiveName].descriptor!(
          undefined,
          schemaMap.directives.testB,
        ),
      ).toBe("TestWildcard testB");
    });
  });
});
