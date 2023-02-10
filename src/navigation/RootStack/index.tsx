import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DrawerNavigationNames, DrawerStack } from '~navigation/DrawerStack';
import { LaunchScreen } from '~screens/LaunchScreen';
import { TaskItemScreen } from '~screens/TaskItemScreen';
import { TodosScreen } from '~screens/TodosScreen';
import { ITask } from '~store/reducers/types';

export enum RootNavigationNames {
    LAUNCH = 'Launch',
    TASKS = "Today's task",
    TODOS = 'Todos',
    TASK = 'Task',
}

export type RootStackParamList = {
    [RootNavigationNames.LAUNCH]: undefined;
    [RootNavigationNames.TASKS]: {
        screen: DrawerNavigationNames.DAILY_TASKS;
        params: { title: string; filter: string; search: string };
    };
    [RootNavigationNames.TODOS]: undefined;
    [RootNavigationNames.TASK]: { task: ITask; isEdit?: boolean };
};

const Root = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{ headerShown: false }}>
                <Root.Screen name={RootNavigationNames.LAUNCH} component={LaunchScreen} />
                <Root.Screen name={RootNavigationNames.TODOS} component={TodosScreen} />
                <Root.Screen name={RootNavigationNames.TASKS} component={DrawerStack} />
                <Root.Screen
                    name={RootNavigationNames.TASK}
                    component={TaskItemScreen}
                    options={({ navigation }) => ({
                        headerTitleAlign: 'center',
                        headerShown: true,
                        headerLeft: () => <Icon name="arrow-left" size={18} onPress={navigation.goBack} />,
                    })}
                />
            </Root.Navigator>
        </NavigationContainer>
    );
};
