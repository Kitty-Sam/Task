import { Platform, StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    textInputContainer: {
        alignSelf: 'stretch',
        margin: theme.gap['16'],
        borderWidth: theme.borderWidth['1'],
        borderColor: theme.color.light_grey,
        borderRadius: theme.gap['8'],
        marginVertical: theme.gap['8'],
        color: theme.color.black,
    },
    textInput: {
        padding: Platform.OS === 'ios' ? theme.gap['16'] : theme.gap['8'],
    },
});
