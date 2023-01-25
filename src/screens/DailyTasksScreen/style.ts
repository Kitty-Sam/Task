import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    addText: {
        fontWeight: '500',
        marginVertical: 100,
    },
    headerText: {
        color: theme.color.black,
        position: 'absolute',
        left: theme.gap['16'],
        top: theme.gap['16'],
        fontWeight: '700',
    },
    addIcon: {
        width: 50,
        height: 50,
        borderRadius: theme.borderRadius['25'],
        backgroundColor: theme.backgroundColor.light_purple,
        justifyContent: 'center',
        marginVertical: theme.gap['30'],
    },
    addIconText: {
        textAlign: 'center',
        color: theme.color.white,
    },
});
