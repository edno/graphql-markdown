import type {
  PrintTypeOptions,
  GraphQLUnionType,
  MDXString,
  GraphQLObjectType,
} from "@graphql-markdown/types";

import { isUnionType, getTypeName } from "@graphql-markdown/graphql";

import { printSection } from "../section";

export const printUnionMetadata = (
  type: unknown,
  options: PrintTypeOptions,
): MDXString | string => {
  if (!isUnionType(type)) {
    return "";
  }

  return printSection((type as GraphQLUnionType).getTypes(), "Possible types", {
    ...options,
    parentType: (type as GraphQLUnionType).name,
  });
};

export const printCodeUnion = (
  type: unknown,
  options?: PrintTypeOptions, // eslint-disable-line @typescript-eslint/no-unused-vars
): string => {
  if (!isUnionType(type)) {
    return "";
  }

  let code = `union ${getTypeName(type)} = `;
  code += (type as GraphQLUnionType)
    .getTypes()
    .map((v: GraphQLObjectType<unknown, unknown>): string => {
      return getTypeName(v);
    })
    .join(" | ");

  return code;
};
