/* eslint-env node */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        'prettier/prettier': 'error',
        camelcase: [
            'off',
            {
                properties: 'never',
            },
        ],
        /* Allow unused variables starting with underscores */
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],

            extends: [
                'plugin:@typescript-eslint/recommended',
                // 'plugin:@typescript-eslint/strict',
                // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],

            parserOptions: {
                project: ['./tsconfig.json'],
                ecmaVersion: 2020,
            },
        },
    ],
    globals: {
        ARGV: false,
        Debugger: false,
        GIRepositoryGType: false,
        imports: false,
        Intl: false,
        logError: false,
        print: false,
        printerr: false,
        window: false,
        global: false,
        _: false,
        C_: false,
        N_: false,
        ngettext: false,
    },
};
