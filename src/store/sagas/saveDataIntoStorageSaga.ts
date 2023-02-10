import AsyncStorage from '@react-native-async-storage/async-storage';

import { SaveDataIntoStorageActionType } from '~store/sagasActions/actions/saveDataIntoStorage';

export function* saveDataIntoStorageWorker({ payload }: SaveDataIntoStorageActionType) {
    const { tasks } = payload;
    try {
        yield AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
        console.warn(error);
    }
}
