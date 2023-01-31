import { addCategoryAC, CategoriesActions, fetchCategoriesAC } from '~store/actions/categoriesAC';

export interface CategoryType {
    catId: string;
    title: string;
    icon: string;
    backgroundColor: string;
}

const initialState: InitialStateType = {
    categories: [],
};

type InitialStateType = {
    categories: CategoryType[];
};

type ActionsType = ReturnType<typeof addCategoryAC> | ReturnType<typeof fetchCategoriesAC>;

export const categoriesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case CategoriesActions.ADD_CATEGORY: {
            const newCategory: CategoryType = action.payload;
            return {
                ...state,
                categories: [newCategory, ...state.categories],
            };
        }

        case CategoriesActions.FETCH_CATEGORIES: {
            return {
                ...state,
                categories: action.payload,
            };
        }

        default:
            return state;
    }
};
