import { DrawerScreenProps } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { DrawerNavigationNames, DrawerStackParamList } from '~navigation/DrawerStack';
import { RootNavigationNames, RootStackParamList } from '~navigation/RootStack/index';

export type LaunchScreenProps = NativeStackScreenProps<RootStackParamList, RootNavigationNames.LAUNCH>;
export type DailyTasksScreenProps = DrawerScreenProps<DrawerStackParamList, DrawerNavigationNames.DAILY_TASKS>;
export type TodosScreenProps = NativeStackScreenProps<RootStackParamList, RootNavigationNames.TODOS>;
export type TaskScreenProps = NativeStackScreenProps<RootStackParamList, RootNavigationNames.TASK>;
