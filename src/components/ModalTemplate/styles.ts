import { StyleSheet } from 'react-native';

import { theme } from '~constants/Theme';

export const styles = StyleSheet.create({
    modalWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.backgroundColor.rgba,
    },
    starIcon: {
        position: 'absolute',
        top: theme.gap['8'],
        right: theme.gap['16'],
    },
    modalView: {
        margin: theme.gap['16'],
        backgroundColor: theme.color.white,
        borderRadius: theme.borderRadius['20'],
        paddingHorizontal: theme.paddingHorizontal['16'],
        paddingVertical: theme.paddingVertical['20'],
        alignItems: 'center',
        shadowColor: theme.color.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
    },

    timeContainer: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'space-between',
        marginVertical: theme.gap['8'],
    },
    boldText: {
        fontWeight: theme.fontWeight['600'],
        color: theme.color.black,
    },
});
