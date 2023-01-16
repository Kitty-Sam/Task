import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: theme.borderRadius['10'],
    },
    textStyle: {
        textAlign: 'center',
        paddingHorizontal: theme.paddingHorizontal['80'],
        paddingVertical: theme.paddingVertical['10'],
        color: theme.color.white,
        fontSize: theme.fontSize['16'],
    },
});
