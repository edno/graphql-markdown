const { danger, fail, warn, schedule } = require("danger");
const Diff = require("diff");
const filter = require("lodash.filter");

const PACKAGE_LOCK = "package-lock.json";
const PACKAGE_JSON = "package.json";
const YARN_LOCK = "yarn.lock";
const LICENSE_FILE = "LICENSE";
const README_FILE = "README.md";
const DANGER_FILE = "dangerfile.js";
const JEST_SNAPSHOT = /^.+\.snap$/;

const packageLock = danger.git.fileMatch(PACKAGE_LOCK);
const packageJson = danger.git.fileMatch(PACKAGE_JSON);
const yarnLock = danger.git.fileMatch(YARN_LOCK);
const licenseFile = danger.git.fileMatch(LICENSE_FILE);
const readmeFile = danger.git.fileMatch(README_FILE);
const dangerFile = danger.git.fileMatch(DANGER_FILE);

const getDiffDependencies = (dependencies) => {
  const diff = Diff.diffJson(dependencies.before, dependencies.after);
  let stringDiff = ``;
  diff.forEach((part) => {
    stringDiff = `${stringDiff} ${part.value}`;
  });
  return stringDiff;
};

// rule-package-lock-detected
if (packageLock.modified || packageLock.created) {
  fail(`\`${PACKAGE_LOCK}\` detected, you must used 'yarn' for dependencies.`);
}

// rule-yarn-lock-deleted
if (yarnLock.deleted) {
  fail(`This PR deleted the \`${YARN_LOCK}\` file.`);
}

// rule-yarn-lock-not-updated
if (packageJson.modified && !(yarnLock.modified || yarnLock.created)) {
  schedule(async () => {
    const packageDiff = await danger.git.JSONDiffForFile(PACKAGE_JSON);
    if (packageDiff.dependencies) {
      const description =
        "Dependencies changed with no corresponding lockfile changes:";
      fail(`${description}\n${getDiffDependencies(packageDiff.dependencies)}`);
    }
    if (packageDiff.devDependencies) {
      const description =
        "Dev dependencies changed with no corresponding lockfile changes:";
      fail(
        `${description}\n${getDiffDependencies(packageDiff.devDependencies)}`,
      );
    }
  });
}

// rule-license-file-modified
if (licenseFile.modified) {
  warn(`This PR modified the \`${LICENSE_FILE}\` file.`);
}

// rule-license-file-deleted
if (licenseFile.deleted) {
  fail(`This PR deleted the \`${LICENSE_FILE}\` file.`);
}

// rule-readme-file-deleted
if (readmeFile.deleted) {
  fail(`This PR deleted the \`${README_FILE}\` file.`);
}

const jestSnapshots = {
  modified: filter(danger.git.modified_files, (file) =>
    file.match(JEST_SNAPSHOT),
  ),
  deleted: filter(danger.git.deleted_files, (file) =>
    file.match(JEST_SNAPSHOT),
  ),
};

// rule-jest-snapshot-modified
if (jestSnapshots.modified.length > 0) {
  const description = "This PR modified some Jest snapshot file/s:";
  warn(`${description}\n - ${jestSnapshots.modified.join("\n - ")}`);
}

// rule-jest-snapshot-deleted
if (jestSnapshots.deleted.length > 0) {
  const description = "This PR deleted some Jest snapshot file/s:";
  warn(`${description}\n - ${jestSnapshots.deleted.join("\n - ")}`);
}

// rule-danger-file-modified
if (dangerFile.modified) {
  warn(`This PR modified the \`${DANGER_FILE}\` file.`);
}
