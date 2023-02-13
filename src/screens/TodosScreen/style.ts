import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    titleContainer: { alignItems: 'center' },
    title: {
        fontSize: theme.fontSize['24'],
        fontWeight: '600',
        color: theme.color.light_black,
    },
    date: {
        fontSize: theme.fontSize['12'],
        fontWeight: '500',
        color: theme.color.light_black,
    },
    inputContainer: {
        flexDirection: 'row',
        width: '70%',
        borderRadius: theme.borderRadius['12'],
        paddingVertical: theme.paddingVertical['15'],
        backgroundColor: theme.color.white,
        paddingLeft: theme.gap['16'],
    },
    input: {
        flex: 1,
        fontSize: theme.fontSize['16'],
    },
    searchImage: {
        margin: theme.gap['4'],
        height: 17,
        width: 17,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    listContainer: {
        flex: 1,
        // height: '60%',
    },
    columnWrapper: {
        alignSelf: 'flex-start',
    },
    sortValueContainer: {
        borderRadius: theme.borderRadius['20'],
        borderColor: theme.backgroundColor.light_blue,
        borderWidth: theme.borderWidth['1'],
    },
    sortValuesContainer: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sortValueText: {
        paddingHorizontal: theme.paddingHorizontal['16'],
        paddingVertical: theme.paddingVertical['6'],
        fontSize: theme.fontSize['16'],
        fontWeight: '400',
        color: theme.color.light_grey,
        textAlign: 'center',
    },
    categoryWrapper: {
        marginTop: theme.gap['16'],
    },
    contentContainer: {
        padding: 16,
    },
    headerContainer: {
        height: '40%',
        justifyContent: 'space-around',
    },
});
