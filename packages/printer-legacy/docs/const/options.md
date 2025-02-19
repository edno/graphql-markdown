# const/options

## Enumerations

### SectionLevels

#### Enumeration Members

##### LEVEL\_3

```ts
LEVEL_3: "###";
```

###### Defined in

[const/options.ts:21](https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/printer-legacy/src/const/options.ts#L21)

##### LEVEL\_4

```ts
LEVEL_4: "####";
```

###### Defined in

[const/options.ts:22](https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/printer-legacy/src/const/options.ts#L22)

##### LEVEL\_5

```ts
LEVEL_5: "#####";
```

###### Defined in

[const/options.ts:23](https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/printer-legacy/src/const/options.ts#L23)

##### NONE

```ts
NONE: "";
```

###### Defined in

[const/options.ts:20](https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/printer-legacy/src/const/options.ts#L20)

***

### TypeHierarchy

#### Enumeration Members

##### API

```ts
API: "api";
```

###### Defined in

[const/options.ts:14](https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/printer-legacy/src/const/options.ts#L14)

##### ENTITY

```ts
ENTITY: "entity";
```

###### Defined in

[const/options.ts:15](https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/printer-legacy/src/const/options.ts#L15)

##### FLAT

```ts
FLAT: "flat";
```

###### Defined in

[const/options.ts:16](https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/printer-legacy/src/const/options.ts#L16)

## Variables

### DEFAULT\_OPTIONS

```ts
const DEFAULT_OPTIONS: Required<Omit<PrintTypeOptions, 
  | "collapsible"
  | "groups"
  | "level"
  | "onlyDocDirectives"
  | "parentType"
  | "schema"
  | "skipDocDirectives">> & object;
```

#### Type declaration

##### collapsible

```ts
collapsible: Maybe<CollapsibleOption>;
```

##### groups

```ts
groups: Maybe<SchemaEntitiesGroupMap>;
```

##### level

```ts
level: Maybe<SectionLevelValue>;
```

##### onlyDocDirectives

```ts
onlyDocDirectives: GraphQLDirective[];
```

##### parentType

```ts
parentType: Maybe<string>;
```

##### schema

```ts
schema: Maybe<GraphQLSchema>;
```

##### skipDocDirectives

```ts
skipDocDirectives: GraphQLDirective[];
```

#### Defined in

[const/options.ts:38](https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/printer-legacy/src/const/options.ts#L38)

***

### PRINT\_TYPE\_DEFAULT\_OPTIONS

```ts
const PRINT_TYPE_DEFAULT_OPTIONS: Required<PrinterConfigPrintTypeOptions>;
```

#### Defined in

[const/options.ts:26](https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/printer-legacy/src/const/options.ts#L26)
