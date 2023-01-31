import { put, select } from 'redux-saga/effects';

import { addCategoryAC } from '~store/actions/categoriesAC';
import { AddCategoryActionType } from '~store/sagasActions/addCategory';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* addCategoryWorker({ payload }: AddCategoryActionType) {
    const { catId } = payload;

    try {
        const resultedDeviceId: string = yield select(getDeviceId);
        yield database
            .ref(`/${resultedDeviceId}/`)
            .child('categories')
            .child(catId)
            .set({ ...payload });
        yield put(addCategoryAC({ ...payload }));
    } catch (error: any) {
        console.warn(error);
    }
}
