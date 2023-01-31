import { CategoryType } from '~store/reducers/categoriesReducer';

export enum CategoriesActions {
    ADD_CATEGORY = 'add_category',
    FETCH_CATEGORIES = 'fetch_categories',
}

export const addCategoryAC: AddCategoryActionType = (payload: CategoryType) => ({
    type: CategoriesActions.ADD_CATEGORY,
    payload,
});

export type AddCategoryActionType = (payload: CategoryType) => {
    payload: CategoryType;
    type: CategoriesActions.ADD_CATEGORY;
};

export const fetchCategoriesAC: FetchCategoriesActionType = (payload: CategoryType[]) => ({
    type: CategoriesActions.FETCH_CATEGORIES,
    payload,
});

export type FetchCategoriesActionType = (payload: CategoryType[]) => {
    payload: CategoryType[];
    type: CategoriesActions.FETCH_CATEGORIES;
};
