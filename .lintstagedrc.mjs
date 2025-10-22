import path from "path";

// Updated to use eslint directly instead of next lint
const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
  "*.mdx": "prettier --write",
};

export default lintStagedConfig;
