/* eslint-env node */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
    },
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
        ecmaVersion: 2017,
    },
};
