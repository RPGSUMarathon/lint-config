import eslintJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import prettierConfig from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import * as reactHooks from "eslint-plugin-react-hooks";
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
  // Backend extension code
  {
    name: "extension-parser",
    files: ["src/extension/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ["tsconfig.extension.json"],
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  // Frontend browser code
  {
    name: "browser-parser",
    files: ["src/browser/**/*.{ts,tsx,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ["tsconfig.browser.json"],
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  eslintJs.configs.recommended,
  // JavaScript rules for extension
  {
    name: "javascript-rules-extension",
    files: ["src/extension/**/*.{js,mjs,cjs,ts}"],
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
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          newlinesBetween: 0,
          groups: [
            ["type-builtin", "builtin"],
            ["type-external", "external"],
            ["type-internal", "internal"],
            ["type-parent", "parent"],
            ["type-sibling", "sibling"],
            ["type-index", "index"],
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
      "prettier/prettier": "error",
    },
  },
  // JavaScript rules for browser
  {
    name: "javascript-rules-browser",
    files: ["src/browser/**/*.{js,mjs,cjs,ts,tsx,jsx}"],
    plugins: {
      perfectionist,
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
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
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          newlinesBetween: "never",
          groups: [
            ["builtin-type", "builtin"],
            ["external-type", "external"],
            ["internal-type", "internal"],
            ["parent-type", "parent"],
            ["sibling-type", "sibling"],
            ["index-type", "index"],
            "object",
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
      "prettier/prettier": "error",
    },
  },
  // TypeScript rules for extension
  {
    name: "typescript-rules-extension",
    files: ["src/extension/**/*.ts"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "tsconfig.extension.json",
        },
      },
    },
    extends: [tseslint.configs.recommended],
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
  // React rules for browser
  {
    name: "react-rules-browser",
    files: ["src/browser/**/*.{jsx,tsx}"],
    extends: [
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      reactHooks.configs["recommended-latest"],
    ],
    plugins: {
      react,
      perfectionist,
      prettier,
      "@stylistic": stylistic,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      "no-duplicate-imports": "error",
      "no-use-before-define": "off",
      "default-case": "error",
      "dot-notation": "error",
      "no-empty-function": "off",
      "no-unneeded-ternary": "error",
      "no-useless-concat": "warn",
      "no-useless-constructor": "off",
      "no-var": "warn",
      "prefer-const": "error",
      yoda: "error",
      eqeqeq: ["error", "smart"],
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          newlinesBetween: "never",
          groups: [
            ["builtin-type", "builtin"],
            ["external-type", "external"],
            ["internal-type", "internal"],
            ["parent-type", "parent"],
            ["sibling-type", "sibling"],
            ["index-type", "index"],
            "object",
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
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-handler-names": [
        "warn",
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
        },
      ],
      "react/no-array-index-key": "warn",
      "react/jsx-boolean-value": ["error", "never"],
      "@stylistic/jsx-self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "@stylistic/jsx-pascal-case": ["error", { allowNamespace: true }],
      "@stylistic/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],
      "prettier/prettier": "error",
    },
  },
  // React TypeScript rules for browser
  {
    name: "react-typescript-rules-browser",
    files: ["src/browser/**/*.tsx"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "tsconfig.browser.json",
        },
      },
    },
    extends: [tseslint.configs.recommended],
    rules: {
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
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  prettierConfig,
]);
