import { CategoriesActions } from '~store/actions/actionsType';
import { ActionsType, ICategory } from '~store/reducers/types';

const initialState = {
    categories: [] as ICategory[],
};

export const categoriesReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case CategoriesActions.ADD_CATEGORY: {
            const newCategory = action.payload.category;
            return {
                ...state,
                categories: [...state.categories, newCategory],
            };
        }

        case CategoriesActions.FETCH_CATEGORIES: {
            return {
                ...state,
                categories: action.payload.categories,
            };
        }

        default:
            return state;
    }
};
