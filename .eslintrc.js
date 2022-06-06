/* eslint-env node */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
    },
    parserOptions: { project: ['./tsconfig.json'] },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
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
    parserOptions: {
        ecmaVersion: 2020,
    },
};
