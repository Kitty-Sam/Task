import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { DailyTasksScreen } from '~screens/DailyTasksScreen';
import { DoneTasksScreen } from '~screens/DoneTasksScreen';
import { ImportantTasksScreen } from '~screens/ImportantTasksScreen';
import { DailyTaskSvg } from '~src/svg/DailyTaskSvg';
import { DoneTaskSvg } from '~src/svg/DoneTaskSvg';
import { ImportantTaskSvg } from '~src/svg/ImportantTaskSvg';

export enum DrawerNavigationNames {
    DAILY_TASKS = 'Daily tasks',
    IMPORTANT_TASKS = 'Important tasks',
    DONE_TASKS = 'Done tasks',
}

export type DrawerStackParamList = {
    [DrawerNavigationNames.DAILY_TASKS]: undefined;
    [DrawerNavigationNames.IMPORTANT_TASKS]: undefined;
    [DrawerNavigationNames.DONE_TASKS]: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export const DrawerStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerContentStyle: {
                    marginTop: 70,
                },
            }}
        >
            <Drawer.Screen
                name={DrawerNavigationNames.DAILY_TASKS}
                component={DailyTasksScreen}
                options={{
                    drawerIcon: () => <DailyTaskSvg />,
                }}
            />
            <Drawer.Screen
                name={DrawerNavigationNames.IMPORTANT_TASKS}
                component={ImportantTasksScreen}
                options={{
                    drawerIcon: () => <ImportantTaskSvg />,
                }}
            />
            <Drawer.Screen
                name={DrawerNavigationNames.DONE_TASKS}
                component={DoneTasksScreen}
                options={{
                    drawerIcon: () => <DoneTaskSvg />,
                }}
            />
        </Drawer.Navigator>
    );
};