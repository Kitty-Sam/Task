import { put } from '@redux-saga/core/effects';
import { getUniqueId } from 'react-native-device-info';

import { saveDeviceID } from '~store/actions/appAC';

export function* getDeviceIdWorker() {
    try {
        const id: string = yield getUniqueId();
        yield put(saveDeviceID(id));
    } catch (error: any) {
        console.warn(error);
    }
}
