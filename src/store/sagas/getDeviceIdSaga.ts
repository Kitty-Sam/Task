import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUniqueId } from 'react-native-device-info';

export function* getDeviceIdWorker() {
    try {
        const id: string = yield getUniqueId();
        yield AsyncStorage.setItem('deviceID', JSON.stringify(id));
    } catch (error: any) {
        console.warn(error);
    }
}
