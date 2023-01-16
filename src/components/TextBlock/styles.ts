import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: theme.fontSize['24'],
        color: theme.color.light_black,
        fontWeight: '500',
        marginBottom: theme.marginBottom['8'],
    },
    paragraph: {
        fontSize: theme.fontSize['12'],
        color: theme.color.light_purple,
        fontWeight: '400',
        marginHorizontal: theme.marginHorizontal['48'],
        textAlign: 'center',
    },
});
