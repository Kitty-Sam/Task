import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { DrawerNavigationNames, DrawerStack } from '~navigation/DrawerStack';
import { LaunchScreen } from '~screens/LaunchScreen';
import { TaskItemScreen } from '~screens/TaskItemScreen';
import { TodosScreen } from '~screens/TodosScreen';
import { TaskType } from '~store/reducers/tasksReducer';

export enum RootNavigationNames {
    LAUNCH = 'Launch',
    TASKS = "Today's task",
    TODOS = 'Todos',
    TASK = 'Task',
}

export type RootStackParamList = {
    [RootNavigationNames.LAUNCH]: undefined;
    [RootNavigationNames.TASKS]: { screen: DrawerNavigationNames.DAILY_TASKS; params: { title: string } };
    [RootNavigationNames.TODOS]: undefined;
    [RootNavigationNames.TASK]: { task: TaskType };
};

const Root = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            <Root.Screen name={RootNavigationNames.LAUNCH} component={LaunchScreen} />
            <Root.Screen name={RootNavigationNames.TODOS} component={TodosScreen} />
            <Root.Screen name={RootNavigationNames.TASKS} component={DrawerStack} />
            <Root.Screen name={RootNavigationNames.TASK} component={TaskItemScreen} options={{ headerShown: true }} />
        </Root.Navigator>
    );
};
