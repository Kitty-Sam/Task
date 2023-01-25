import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    rootContainer: {
        width: 350,
        padding: theme.gap['16'],
        borderWidth: theme.borderWidth['1'],
        borderColor: theme.color.light_grey,
        borderRadius: theme.borderRadius['10'],
        flexDirection: 'row',
        alignItems: 'center',
        margin: theme.gap['8'],
    },
    dataContainer: { flexDirection: 'column' },
    iconContainer: { position: 'absolute', right: theme.gap['16'] },
    titleText: {
        fontWeight: '700',
        fontSize: theme.fontSize['24'],
    },
    checkbox: { marginHorizontal: theme.gap['16'] },
    trashIconContainer: {
        position: 'absolute',
        right: theme.gap['8'],
        top: theme.gap['24'],
        backgroundColor: theme.backgroundColor.light_purple,
        padding: theme.gap['12'],
        borderRadius: theme.borderRadius['5'],
    },
});
