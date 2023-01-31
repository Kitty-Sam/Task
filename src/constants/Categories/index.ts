import { theme } from '~constants/Theme';
import { CategoryType } from '~store/reducers/categoriesReducer';

export const categories: CategoryType[] = [
    {
        catId: '1674818016899',
        title: 'School',
        icon: 'building',
        backgroundColor: theme.backgroundColor.green_and_blue,
    },
    {
        catId: '1674818021233',
        title: 'Work',
        icon: 'briefcase',

        backgroundColor: theme.backgroundColor.light_blue,
    },
    {
        catId: '1674818029589',
        title: 'Shop',
        icon: 'shopping-cart',

        backgroundColor: theme.backgroundColor.light_brown,
    },
    {
        catId: '1674818021231',
        title: 'Read',
        icon: 'book',

        backgroundColor: theme.backgroundColor.dark_blue,
    },
    {
        catId: '1674818029580',
        title: 'Work out',
        icon: 'child',

        backgroundColor: theme.backgroundColor.green,
    },
    {
        catId: '1674818041145',
        title: 'Add',
        backgroundColor: theme.color.pink,
        icon: 'plus',
    },
];
