import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    addIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: theme.backgroundColor.light_purple,
        justifyContent: 'center',
        marginTop: theme.gap['50'],
    },
    addIconText: {
        textAlign: 'center',
        color: theme.color.white,
    },
});
