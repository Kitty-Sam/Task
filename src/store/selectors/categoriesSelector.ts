import { AppStoreType } from '~store/reducers/rootReducer';

export const getCategories = (state: AppStoreType) => state.categories.categories;
