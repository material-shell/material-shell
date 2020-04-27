module.exports = {
    env: {
        es6: true,
    },
    extends: 'eslint:recommended',
    rules: {
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'arrow-spacing': 'error',
        'brace-style': 'error',
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        indent: [
            'error',
            4,
            {
                ignoredNodes: [
                    'CallExpression[callee.object.name=GObject][callee.property.name=registerClass] > ClassExpression:first-child',
                ],
                MemberExpression: 'off',
                SwitchCase: 1,
            },
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'linebreak-style': ['error', 'unix'],
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true,
            },
        ],
        'no-implicit-coercion': [
            'error',
            {
                allow: ['!!'],
            },
        ],
        'no-restricted-properties': [
            'error',
            {
                object: 'Lang',
                property: 'bind',
                message: 'Use arrow notation or Function.prototype.bind()',
            },
            {
                object: 'Lang',
                property: 'Class',
                message: 'Use ES6 classes',
            },
        ],
        'object-curly-newline': [
            'error',
            {
                consistent: true,
            },
        ],
        'prefer-template': 'error',
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        semi: ['error', 'always'],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'space-before-blocks': 'error',
        'space-infix-ops': [
            'error',
            {
                int32Hint: false,
            },
        ],
        camelcase: [
            'error',
            {
                properties: 'never',
                allow: ['^vfunc_'],
            },
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '_$',
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'prefer-arrow-callback': 'error',
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
