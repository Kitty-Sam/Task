import { ADD_CATEGORY } from '~store/sagasActions/types';

export interface AddCategoryPayload {
    catId: string;
    title: string;
    icon: string;
    backgroundColor: string;
}

export const addCategoryAction = (payload: AddCategoryPayload) => ({
    type: ADD_CATEGORY,
    payload,
});

export type AddCategory = {
    type: typeof ADD_CATEGORY;
    payload: AddCategoryPayload;
};
