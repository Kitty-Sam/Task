import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    activityIndicator: {
        flex: 1,
    },
    addText: {
        fontWeight: theme.fontWeight['500'],
        marginVertical: 100,
        color: theme.color.black,
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
    viewContainer: {
        marginTop: 30,
    },
});
