import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put, select } from 'redux-saga/effects';

import { categories } from '~constants/Categories';
import { fetchCategoriesAC, toggleAppStatus } from '~store/actions/actions';
import { RequestStatus } from '~store/reducers/appReducer';
import { ICategory } from '~store/reducers/types';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* fetchCategoriesWorker() {
    try {
        yield put(toggleAppStatus({ status: RequestStatus.LOADING }));
        const resultedDeviceId: string = yield select(getDeviceId);
        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/${resultedDeviceId}/categories`);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

        if (snapshot.val()) {
            const categoriesFB: ICategory[] = Object.values(snapshot.val());
            const sortedCategoriesFB = categoriesFB.sort((a, b) => +a.catId - +b.catId);
            yield put(fetchCategoriesAC({ categories: sortedCategoriesFB }));
            yield put(toggleAppStatus({ status: RequestStatus.IDLE }));
            return;
        }

        const sortedCategories = categories.sort((a, b) => +a.catId - +b.catId);

        sortedCategories.forEach(async (el) => {
            await database
                .ref(`/${resultedDeviceId}/`)
                .child('categories')
                .child(el.catId)
                .set({ ...el });
        });

        yield put(fetchCategoriesAC({ categories: sortedCategories }));
        yield put(toggleAppStatus({ status: RequestStatus.FAILED }));
    } catch (error: any) {
        const sortedCategories = categories.sort((a, b) => +a.catId - +b.catId);
        yield put(fetchCategoriesAC({ categories: sortedCategories }));
        yield put(toggleAppStatus({ status: RequestStatus.FAILED }));
        console.warn(error);
    }
}
