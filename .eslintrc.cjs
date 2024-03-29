/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:perfectionist/recommended-natural",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:astro/recommended",
    "plugin:solid/typescript",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "solid", "perfectionist"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    // ...
  ],
};
