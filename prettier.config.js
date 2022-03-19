module.exports = {
    trailingComma: 'es5',
    endOfLine: 'lf',
    singleQuote: true,
    tabWidth: 4,
    printWidth: 140,
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
