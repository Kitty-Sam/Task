import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    containerStyle: {
        width: 100,
        height: 100,
        borderRadius: theme.borderRadius['16'],
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    counter: {
        position: 'absolute',
        right: theme.gap['8'],
        top: theme.gap['8'],
        fontSize: theme.fontSize['16'],
        color: theme.color.white,
        fontWeight: '400',
    },
    title: {
        fontSize: theme.fontSize['16'],
        color: theme.color.white,
        fontWeight: '500',
    },
});
