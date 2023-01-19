import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUniqueId } from 'react-native-device-info';
import { put } from 'redux-saga/effects';

import { saveDeviceID } from '~store/actions/appAC';

export function* getDeviceIdWorker() {
    try {
        const id: string = yield getUniqueId();
        yield AsyncStorage.setItem('deviceID', JSON.stringify(id));
        yield put(saveDeviceID(id));
    } catch (error: any) {
        console.warn(error);
    }
}
