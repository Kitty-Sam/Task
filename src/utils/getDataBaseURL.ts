import { firebase } from '@react-native-firebase/database';

export const database = firebase.app().database('https://todolist-bab53-default-rtdb.firebaseio.com/');
