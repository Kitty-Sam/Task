import AsyncStorage from '@react-native-async-storage/async-storage';

import { SaveDataIntoStorageActionType } from '~store/sagasActions/saveDataIntoStorage';

export function* saveDataIntoStorageWorker({ payload }: SaveDataIntoStorageActionType) {
    const { deviceId, tasks } = payload;
    try {
        yield AsyncStorage.setItem('deviceID', JSON.stringify(deviceId));
        yield AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
        console.warn(error);
    }
}
