import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootNavigationNames, RootStackParamList } from '~navigation/RootStack/index';

export type StackScreenNavigationProps<T extends keyof NavParamList, NavParamList extends ParamListBase> = {
    navigation: StackNavigationProp<NavParamList, T>;
    route: RouteProp<NavParamList, T>;
};

export type LaunchScreenProps = StackScreenNavigationProps<RootNavigationNames.LAUNCH, RootStackParamList>;
export type TodosScreenProps = StackScreenNavigationProps<RootNavigationNames.TODOS, RootStackParamList>;
