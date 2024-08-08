/**
 * Custom GraphQL type guards and property guards.
 *
 * @packageDocumentation
 */

import type {
  GraphQLField,
  GraphQLOperationType,
  DeprecatedType,
} from "@graphql-markdown/types";

import { isDirective } from "graphql/type/directives";

import { executableDirectiveLocation } from "./directive";

export {
  isDirective as isDirectiveType,
  isEnumType,
  isInputObjectType as isInputType,
  isInterfaceType,
  isLeafType,
  isListType,
  isNamedType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isType,
  isUnionType,
} from "graphql/type";
export { isNode } from "graphql/language/ast";

/**
 * Checks if a GraphQL named type is of type `GraphQLField`.
 *
 * @param type - a GraphQL type.
 *
 */
export const isGraphQLFieldType = (
  type: unknown,
): type is GraphQLField<unknown, unknown, unknown> => {
  return (
    typeof type === "object" &&
    type !== null &&
    "args" in type &&
    (type as GraphQLField<unknown, unknown, unknown>).args.length > 0
  );
};

/**
 * Checks if a GraphQL named type is of generic type `T`.
 *
 * @typeParam T - a GraphQL type to check against, eg `GraphQLObjectType`.
 * @param obj - a GraphQL named type from the GraphQL schema.
 * @param type - the GraphQL type `T`.
 *
 */
export const instanceOf = <T>(
  obj: unknown,
  type: new () => T,
): obj is new () => T => {
  try {
    const expect = type.name;
    return typeof obj !== "object" || obj === null
      ? false
      : obj.constructor.name === expect;
  } catch {
    return false;
  }
};

/**
 * Checks if a GraphQL named type is deprecated.
 *
 * @typeParam T - a GraphQL type to check against, eg `GraphQLObjectType`.
 * @param obj - an instance of `T`.
 *
 */
export const isDeprecated = <T>(obj: T): obj is DeprecatedType<T> => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    (("isDeprecated" in obj && obj.isDeprecated === true) ||
      ("deprecationReason" in obj && typeof obj.deprecationReason === "string"))
  );
};

/**
 * Checks if a GraphQL type a GraphQL operation (query, mutation, subscription).
 *
 * @param type - a GraphQL type.
 *
 */
export const isOperation = (type: unknown): type is GraphQLOperationType => {
  return typeof type === "object" && type !== null && "type" in type;
};

/**
 * Checks if a type belongs to API (operation related).
 *
 * @param type - a GraphQL type.
 *
 */
export const isApiType = (type: unknown): boolean => {
  if (isOperation(type)) {
    return true;
  }
  return isDirective(type) && executableDirectiveLocation(type);
};

/**
 * Checks if a type belongs to schema (schema type definition excluding operations related types).
 *
 * @param type - a GraphQL type.
 *
 */
export const isSystemType = (type: unknown): boolean => {
  return !isApiType(type);
};
