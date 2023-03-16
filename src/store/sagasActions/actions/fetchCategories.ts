import { FETCH_CATEGORIES } from '~store/sagasActions/types';

export const fetchCategoriesAction = (): FetchCategoriesActionType => ({
    type: FETCH_CATEGORIES,
});

export type FetchCategoriesActionType = {
    type: typeof FETCH_CATEGORIES;
};
