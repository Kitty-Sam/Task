import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    text: {
        color: theme.color.black,
    },
    columnWrapper: {
        alignSelf: 'flex-start',
    },
    contentContainer: {
        padding: 8,
    },
});
