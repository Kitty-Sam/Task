import { theme } from '~constants/Theme';

const school = require('../../../assets/school.png');
const work = require('../../../assets/work.png');
const shop = require('../../../assets/shop.png');
const read = require('../../../assets/read.png');
const human = require('../../../assets/human.png');
const add = require('../../../assets/add.png');

export const categories = [
    {
        title: 'School',
        icon: school,
        style: {
            width: 29,
            height: 24,
        },
        backgroundColor: theme.backgroundColor.green_and_blue,
    },
    {
        title: 'Work',
        icon: work,
        style: {
            width: 27,
            height: 25,
        },
        backgroundColor: theme.backgroundColor.light_blue,
    },
    {
        title: 'Shop',
        icon: shop,
        style: {
            width: 27,
            height: 27,
        },
        backgroundColor: theme.backgroundColor.light_brown,
    },
    {
        title: 'Read',
        icon: read,
        style: {
            width: 29,
            height: 23,
        },
        backgroundColor: theme.backgroundColor.dark_blue,
    },
    {
        title: 'Work out',
        icon: human,
        style: {
            width: 19,
            height: 26,
        },
        backgroundColor: theme.backgroundColor.green,
    },
    {
        title: '',
        backgroundColor: theme.color.white,
        icon: add,
        style: {
            width: 35,
            height: 35,
        },
    },
];
