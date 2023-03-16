import { Dimensions, StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    containerStyle: {
        width: width / 4,
        height: width / 4,
        borderRadius: theme.borderRadius['16'],
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: theme.gap['10'],
    },
    counter: {
        position: 'absolute',
        right: theme.gap['8'],
        top: theme.gap['8'],
        fontSize: theme.fontSize['16'],
        color: theme.color.white,
        fontWeight: theme.fontWeight['400'],
    },
    title: {
        fontSize: theme.fontSize['16'],
        color: theme.color.white,
        fontWeight: theme.fontWeight['500'],
    },
});
