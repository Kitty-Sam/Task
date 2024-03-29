module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'react-native-reanimated/plugin',
        [
            'module-resolver',
            {
                alias: {
                    '~src': './src',
                    '~components': './src/components',
                    '~screens': './src/screens',
                    '~navigation': './src/navigation',
                    '~utils': './src/utils',
                    '~context': './src/context',
                    '~store': './src/store',
                    '~hooks': './src/hooks',
                    '~constants': './src/constants',
                    '~assets': './src/assets',
                },
            },
        ],
    ],
};
