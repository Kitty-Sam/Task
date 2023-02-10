import { put, select } from 'redux-saga/effects';

import { addCategoryAC } from '~store/actions/actions';
import { AddCategory } from '~store/sagasActions/actions/addCategory';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* addCategoryWorker({ payload }: AddCategory) {
    const { catId } = payload;

    try {
        const resultedDeviceId: string = yield select(getDeviceId);
        yield database
            .ref(`/${resultedDeviceId}/`)
            .child('categories')
            .child(catId)
            .set({ ...payload });
        yield put(addCategoryAC({ category: payload }));
    } catch (error: any) {
        console.warn(error);
    }
}
