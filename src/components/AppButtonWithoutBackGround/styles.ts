import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: theme.borderRadius['10'],
    },
    textStyle: {
        textAlign: 'center',
        paddingHorizontal: theme.paddingHorizontal['16'],
        paddingVertical: theme.paddingVertical['10'],
        color: theme.color.blue,
        fontSize: theme.fontSize['16'],
    },
});
