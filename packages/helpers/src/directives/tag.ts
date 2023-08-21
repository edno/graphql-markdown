/**
 * Custom directive `tag` helper.
 *
 * @see {@link https://graphql-markdown.github.io/docs/advanced/custom-directive#tag | Option `customDirective.[directive].tag`}
 *
 * @packageDocumentation
 */

import type { Badge, GraphQLDirective } from "@graphql-markdown/types";

/**
 * Helper for rendering custom description from schema directive on type.
 * This is an example on how to build a custom `descriptor` callback.
 *
 * @param directive - the schema directive to parse.
 * @param type - the type being processed.
 * @param classname - optional CSS classname, `"badge--secondary"` by default.
 *
 * @returns a custom description based on directive value.
 *
 * @example
 * ```js
 * import { GraphQLDirective, GraphQLScalarType } from "graphql";
 * import { directiveTag } from "@graphql-markdown/helpers/directives/tag";
 *
 * const directive = new GraphQLDirective({
 *   name: "auth",
 *   description: "Authentication required",
 *   locations: [],
 * });
 *
 * const type = new GraphQLScalarType<string>({
 *   name: "FooBar",
 *   astNode: {
 *     kind: Kind.SCALAR_TYPE_DEFINITION,
 *     name: { kind: Kind.NAME, value: "FooBar" },
 *     directives: [
 *       {
 *         kind: Kind.DIRECTIVE,
 *         name: { kind: Kind.NAME, value: "auth" },
 *       },
 *     ],
 *   },
 * });
 *
 * directiveTag(directive, type);
 * // Expected result: { text: "@auth", classname: "badge--secondary" }
 * ```
 *
 */
export function directiveTag(
  directive: GraphQLDirective,
  type?: unknown,
  classname: string = "badge--secondary",
): Badge {
  return {
    text: `@${directive.name}`,
    classname: classname,
  };
}
