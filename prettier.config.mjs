// @ts-check

/** @type {import('@trivago/prettier-plugin-sort-imports').PrettierConfig} */
const prettierConfig = {
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderCaseInsensitive: true,
  importOrderSeparation: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    './node_modules/prettier-plugin-jsdoc/dist/index.js',
    'prettier-plugin-tailwindcss',
  ],
};

export default prettierConfig;
