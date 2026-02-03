import eslintJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";

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
  eslintJs.configs.recommended,
  {
    name: "javascript-rules",
    files: ["**/*.{js,mjs,cjs}"],
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

      // prettier
      "prettier/prettier": "error",
    },
  },
  prettierConfig,
]);
