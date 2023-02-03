import { getUniqueId } from 'react-native-device-info';
import { put } from 'redux-saga/effects';

import { saveDeviceID } from '~store/actions/actions';

export function* getDeviceIdWorker() {
    try {
        const id: string = yield getUniqueId();
        yield put(saveDeviceID({ id }));
    } catch (error: any) {
        console.warn(error);
    }
}
