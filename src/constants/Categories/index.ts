import { theme } from '~constants/Theme';

export const categories = [
    {
        title: 'School',
        icon: 'building',
        style: {
            width: 29,
            height: 24,
        },
        backgroundColor: theme.backgroundColor.green_and_blue,
    },
    {
        title: 'Work',
        icon: 'briefcase',
        style: {
            width: 27,
            height: 25,
        },
        backgroundColor: theme.backgroundColor.light_blue,
    },
    {
        title: 'Shop',
        icon: 'shopping-cart',
        style: {
            width: 27,
            height: 27,
        },
        backgroundColor: theme.backgroundColor.light_brown,
    },
    {
        title: 'Read',
        icon: 'book',
        style: {
            width: 29,
            height: 23,
        },
        backgroundColor: theme.backgroundColor.dark_blue,
    },
    {
        title: 'Work out',
        icon: 'child',
        style: {
            width: 19,
            height: 26,
        },
        backgroundColor: theme.backgroundColor.green,
    },
    {
        title: '',
        backgroundColor: theme.color.white,
        icon: 'plus',
        style: {
            width: 35,
            height: 35,
        },
    },
];
