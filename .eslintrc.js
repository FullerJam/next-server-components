module.exports = {
    plugins: ['prettier'],
    ignorePatterns: ['/**/cdk.out/'],
    root: true,
    overrides: [
        {
            files: ['./app/*.ts', './app/*.tsx'],
            plugins: ['import', '@typescript-eslint'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: './tsconfig.json'
            },
            settings: {
                'import/resolver': {
                    typescript: {
                        tsconfigRootDir: __dirname,
                        project: './tsconfig.json'
                    },
                    next: {
                        rootDir: './'
                    }
                }
            }
        }
    ],
    rules: {
        'import/extensions': 'off',
        'prettier/prettier': [
            0,
            'error',
            {
                'endOfLine': 'auto'
            }
        ]
    }
};
