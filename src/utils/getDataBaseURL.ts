import { firebase } from '@react-native-firebase/database';
import Config from 'react-native-config';

export const database = firebase.app().database(Config.DATA_BASE_URL);
