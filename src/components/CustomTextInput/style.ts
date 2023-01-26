import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    textInputContainer: {
        alignSelf: 'stretch',
        margin: 16,
        borderWidth: 1,
        borderColor: theme.color.light_grey,
        borderRadius: 8,
        marginVertical: 8,
        padding: 16,
        color: theme.color.black,
    },
});
