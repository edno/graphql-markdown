import { join } from "node:path";
import { createHash } from "node:crypto";

import { loadSchema } from "@graphql-tools/load";
import { diff, type Change } from "@graphql-inspector/core";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

import type {
  DiffMethodName,
  FunctionCheckSchemaChanges,
  GraphQLSchema,
} from "@graphql-markdown/types";

import {
  fileExists,
  readFile,
  saveFile,
  printSchema,
} from "@graphql-markdown/utils";

export const SCHEMA_HASH_FILE = ".schema" as const;
export const SCHEMA_REF = "schema.graphql" as const;
export enum COMPARE_METHOD {
  DIFF = "SCHEMA-DIFF",
  HASH = "SCHEMA-HASH",
  FORCE = "FORCE",
  NONE = "NONE",
}

export const getSchemaHash = (schema: GraphQLSchema): string => {
  const printedSchema = printSchema(schema);
  return createHash("sha256").update(printedSchema).digest("hex");
};

export const getDiff = async (
  schemaNew: GraphQLSchema,
  schemaOldLocation: string,
): Promise<Change[]> => {
  const schemaOld = await loadSchema(schemaOldLocation, {
    loaders: [new GraphQLFileLoader()],
  });
  return diff(schemaOld, schemaNew);
};

export const checkSchemaChanges: FunctionCheckSchemaChanges = async (
  schema: GraphQLSchema,
  outputDir: string,
  method: DiffMethodName = COMPARE_METHOD.DIFF as DiffMethodName,
): Promise<boolean> => {
  if (method === COMPARE_METHOD.DIFF) {
    const schemaRef = join(outputDir, SCHEMA_REF);
    if (await fileExists(schemaRef)) {
      const schemaDiff = await getDiff(schema, schemaRef);
      return schemaDiff.length > 0;
    }
    const schemaPrint = printSchema(schema);
    await saveFile(schemaRef, schemaPrint);
  }

  if (method === COMPARE_METHOD.HASH) {
    const hashFile = join(outputDir, SCHEMA_HASH_FILE);
    const hashSchema = getSchemaHash(schema);
    if (await fileExists(hashFile)) {
      const hash = await readFile(hashFile, { encoding: "utf8", flag: "r" });
      return hashSchema !== hash;
    }
    await saveFile(hashFile, hashSchema);
  }

  return true;
};
