import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
// import astro from 'eslint-plugin-astro'; // Comentado temporalmente
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        browser: true,
        es2022: true,
        node: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'unused-imports': unusedImports,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  // Archivos .astro se ignoran temporalmente debido a problemas de compatibilidad con ESLint v9
  // {
  //   files: ['**/*.astro'],
  //   plugins: {
  //     astro: astro,
  //   },
  //   rules: {
  //     ...astro.configs.recommended.rules,
  //     'astro/no-conflict-set-directives': 'error',
  //     'astro/no-unused-define-vars-in-style': 'error',
  //   },
  // },
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.astro/',
      '*.min.js',
      '*.min.css',
      'public/',
      'package-lock.json',
      '**/*.astro', // Ignorar archivos .astro temporalmente
    ],
  },
];
