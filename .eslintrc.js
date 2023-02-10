module.exports = {
    parser: '@typescript-eslint/parser',
    root: true,
    extends: ['@react-native-community', 'airbnb-typescript', 'prettier', 'plugin:import/recommended'],
    parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
    },
    settings: {
        'import/ignore': [
            'node_modules/react-native/index\\.js$',
            'react-navigation/native',
            'react-navigation/stack',
            '@react-native-firebase/database',
        ],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['src', 'node_modules'],
            },
        },
    },
    ignorePatterns: ['.eslintrc.js', 'metro.config.js'],
    rules: {
        'import/no-named-as-default': 0,
        'import/named': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/default-param-last': 'off',
        "@react-native-firebase/database'(import/named)": 'off',
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
};
