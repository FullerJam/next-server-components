// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
    endOfLine: 'auto',
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    arrowParens: 'avoid',
    jsxBracketSameLine: false,
    bracketSpacing: true,
    jsxSingleQuote: false,
    quoteProps: 'preserve',
    printWidth: 100
};

module.exports = config;
