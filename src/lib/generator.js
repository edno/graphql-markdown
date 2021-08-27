const chalk = require("chalk");
const {
  getSchemaMap,
  loadSchema,
  GraphQLFileLoader,
  UrlLoader,
  JsonFileLoader,
} = require("./graphql");
const Renderer = require("./renderer");
const Printer = require("./printer");
const { round } = require("./utils");
const {
  checkSchemaChanges,
  saveSchemaHash,
  saveSchemaFile,
} = require("./diff");

const time = process.hrtime();

module.exports = async function generateDocFromSchema(
  baseURL,
  schemaLocation,
  outputDir,
  linkRoot,
  homepageLocation,
  diffMethod,
  tmpDir,
) {
  const schema = await loadSchema(schemaLocation, {
    loaders: [new GraphQLFileLoader(), new UrlLoader(), new JsonFileLoader()],
  });

  const hasChanged = await checkSchemaChanges(schema, tmpDir, diffMethod);

  if (hasChanged) {
    const renderer = new Renderer(
      new Printer(schema, baseURL, linkRoot),
      outputDir,
      baseURL,
    );
    const rootTypes = getSchemaMap(schema);

    const pages = await Promise.all(
      Object.keys(rootTypes)
        .map((typeName) =>
          renderer.renderRootTypes(typeName, rootTypes[typeName]),
        )
        .flat(),
    );

    await renderer.renderHomepage(homepageLocation);
    const sidebarPath = await renderer.renderSidebar();

    const [sec, msec] = process.hrtime(time);
    const duration = round(sec + msec / 1000000000, 3);
    console.info(
      chalk.green(
        `Documentation successfully generated in "${outputDir}" with base URL "${baseURL}".`,
      ),
    );
    console.log(
      chalk.blue(
        `${pages.length} pages generated in ${duration}s from schema "${schemaLocation}".`,
      ),
    );
    console.info(
      chalk.blue.bold(
        `Remember to update your Docusaurus site's sidebars with "${sidebarPath}".`,
      ),
    );

    // create references for checkSchemaChanges
    await saveSchemaHash(schema, tmpDir);
    await saveSchemaFile(schema, tmpDir);
  } else {
    console.info(
      chalk.blue(`No changes detected in schema "${schemaLocation}".`),
    );
  }
};
