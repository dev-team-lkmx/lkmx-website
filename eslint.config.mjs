import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import customRules from "eslint-plugin-custom-rules";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.config(
    {
      // Applies to all files
      ignores: [".next/"],
      plugins: {
        "unused-imports": unusedImports,
      },
      rules: {
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],
      },
    },
    // Next.js recommended configuration
    {
      plugins: { "@next/next": nextPlugin },
      rules: {
        ...nextPlugin.configs.recommended.rules,
        ...nextPlugin.configs["core-web-vitals"].rules,
      },
    },
    // Type-aware linting configuration, applies only to .ts/.tsx files
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: tseslint.configs.recommendedTypeChecked,
      languageOptions: {
        parserOptions: {
          project: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
    {
      plugins: {
        "custom-rules": customRules,
      },
      rules: {
        "custom-rules/prefer-themed-text": "error",
        "custom-rules/prefer-defined-colors": "error",
      },
    },
  ),
  eslintConfigPrettier,
];
