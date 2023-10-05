module.exports = {
    plugins: ['prettier', 'unused-imports', 'simple-import-sort'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                jsxSingleQuote: true,
                printWidth: 120,
                endOfLine: 'auto',
            },
        ],
    },
    extends: ['react-app', 'react-app/jest', 'prettier', 'plugin:prettier/recommended'],
    overrides: [
        {
            files: [
                'src/app/**/*.{js,ts,jsx,tsx}',
                'src/stories/components/**/*.{js,ts,jsx,tsx}',
                '.storybook/*.{js,ts}',
            ],
            rules: {
                'import/no-anonymous-default-export': 'off',
                semi: 'error',
                '@typescript-eslint/no-unused-vars': 'off',
                'unused-imports/no-unused-imports': 'warn',
                'unused-imports/no-unused-vars': [
                    'error',
                    {
                        vars: 'all',
                        varsIgnorePattern: '^_',
                        args: 'after-used',
                        argsIgnorePattern: '^_',
                    },
                ],
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            ['^react', '^@?\\w'],
                            ['^(@|components)(/.*|$)'],
                            ['^\\u0000'],
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                            ['^.+\\.?(css)$'],
                        ],
                    },
                ],
                'simple-import-sort/exports': 'error',
            },
        },
    ],
};
