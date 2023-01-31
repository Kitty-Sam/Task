import { ADD_CATEGORY } from '~store/sagasActionsType';

export type AddCategoryPayloadType = {
    catId: string;
    title: string;
    icon: string;
    backgroundColor: string;
};

export const addCategoryAction = (payload: AddCategoryPayloadType): AddCategoryActionType => ({
    type: ADD_CATEGORY,
    payload,
});

export type AddCategoryActionType = {
    type: typeof ADD_CATEGORY;
    payload: AddCategoryPayloadType;
};
