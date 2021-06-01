module.exports = {
    root: true,
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            env: {
                browser: true,
                node: true,
                es6: true,
            },
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
                'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // Fix prop={'string'} to be only prop="string"
            },
        },
        {
            files: ['**/*.stories.*(ts|tsx)'],
            rules: {
                'import/no-default-export': 'off',
            },
        },
    ],
};
