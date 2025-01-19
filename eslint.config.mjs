// eslint.config.js at the project root
import path from "path";
import { fileURLToPath } from "url";
import ParserTypescriptEslint from "@typescript-eslint/parser";
import PluginImport from "eslint-plugin-import";
import PluginJest from "eslint-plugin-jest";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: [
      "**/node_modules",
      "**/dist",
      "**/build",
      "**/__snapshots__",
      "**/mocks",
      "**/coverage",
    ],
  },
  {
    files: [
      "src/**/*.{js,mjs,cjs,ts,jsx,tsx}",
      "app.ts",
      "server.ts",
      "tests/**",
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: ParserTypescriptEslint,
      parserOptions: {
        project: ["tsconfig.json"],
        tsconfigRootDir: path.resolve(__dirname),
      },
    },
    plugins: {
      import: PluginImport,
      jest: PluginJest,
    },
    rules: {
      "jest/no-deprecated-functions": "off",
    },
    settings: {
      "import/resolver": {
        ...PluginImport.configs.typescript.settings["import/resolver"],
        typescript: {
          project: ["tsconfig.json"],
        },
      },
    },
  },
];
