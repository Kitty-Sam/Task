import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    dividerWrapper: {
        borderBottomColor: theme.color.black,
        borderBottomWidth: theme.borderWidth['1'],
        alignSelf: 'stretch',
        marginHorizontal: theme.marginHorizontal['16'],
    },
});
