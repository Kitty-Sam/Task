import { theme } from '~constants/Theme';
import { ICategory } from '~store/reducers/types';

export const categories: ICategory[] = [
    {
        catId: '1674818016899',
        title: 'school',
        icon: 'building',
        backgroundColor: theme.backgroundColor.green_and_blue,
    },
    {
        catId: '1674818021233',
        title: 'work',
        icon: 'briefcase',

        backgroundColor: theme.backgroundColor.light_blue,
    },
    {
        catId: '1674818029589',
        title: 'shop',
        icon: 'shopping-cart',

        backgroundColor: theme.backgroundColor.light_brown,
    },
    {
        catId: '1674818021231',
        title: 'read',
        icon: 'book',

        backgroundColor: theme.backgroundColor.dark_blue,
    },
    {
        catId: '1674818029580',
        title: 'work out',
        icon: 'child',

        backgroundColor: theme.backgroundColor.green,
    },
    {
        catId: '1664818041145',
        title: 'add',
        backgroundColor: theme.color.pink,
        icon: 'plus',
    },
];
