import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    rootContainer: {
        width: '45%',
        borderWidth: theme.borderWidth['1'],
        borderColor: theme.color.light_black,
        borderRadius: theme.borderRadius['5'],
        minHeight: 150,
        padding: theme.gap['4'],
        margin: theme.gap['10'],
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    boldText: {
        color: theme.color.black,
        fontWeight: 'bold',
    },
    text: {
        color: theme.color.black,
    },
});
