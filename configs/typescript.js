import eslintJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";
import * as tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: [
      "node_modules",
      ".gitignore",
      "dist",
      "build",
      "coverage",
      ".next",
      "*.min.js",
    ],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["tsconfig.json"],
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  eslintJs.configs.recommended,
  {
    name: "javascript-rules",
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {
      perfectionist,
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      // eslint
      "no-duplicate-imports": ["error", { allowSeparateTypeImports: true }],
      "no-use-before-define": "error",
      curly: "error",
      "default-case": "error",
      "dot-notation": "error",
      "no-empty-function": "error",
      "no-unneeded-ternary": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-var": "warn",
      "prefer-const": "error",
      yoda: "error",
      eqeqeq: ["error", "smart"],

      // perfectionist
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          newlinesBetween: 0,
          groups: [
            "type-import",
            ["value-builtin", "value-external"],
            "type-internal",
            "value-internal",
            ["type-parent", "type-sibling", "type-index"],
            ["value-parent", "value-sibling", "value-index"],
            "ts-equals-import",
            "unknown",
          ],
        },
      ],
      "perfectionist/sort-exports": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-object-types": [
        "warn",
        { type: "natural", order: "asc" },
      ],

      // prettier
      "prettier/prettier": "error",
    },
  },
  ...tseslint.configs.recommended,
  {
    name: "typescript-rules",
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/prefer-nullish-coalescing": [
        "warn",
        { ignoreIfStatements: true },
      ],
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/prefer-includes": "warn",
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
        },
        {
          selector: "typeAlias",
          format: ["PascalCase"],
        },
        {
          selector: "enum",
          format: ["PascalCase"],
        },
      ],
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-require-imports": "error",
    },
  },
  prettierConfig,
]);
