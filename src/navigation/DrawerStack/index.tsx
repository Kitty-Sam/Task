import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { theme } from '~constants/Theme';
import { CustomDrawer } from '~navigation/DrawerStack/CustomDrawer';
import { styles } from '~navigation/DrawerStack/style';
import { DailyTasksScreen } from '~screens/DailyTasksScreen';
import { DoneTasksScreen } from '~screens/DoneTasksScreen';
import { ImportantTasksScreen } from '~screens/ImportantTasksScreen';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export enum DrawerNavigationNames {
    DAILY_TASKS = 'Daily tasks',
    IMPORTANT_TASKS = 'Important tasks',
    DONE_TASKS = 'Done tasks',
}

export type DrawerStackParamList = {
    [DrawerNavigationNames.DAILY_TASKS]: { title: string; filter: string; search: string };
    [DrawerNavigationNames.IMPORTANT_TASKS]: undefined;
    [DrawerNavigationNames.DONE_TASKS]: undefined;
};

export const DrawerStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            useLegacyImplementation
            screenOptions={({ navigation }) => ({
                drawerActiveTintColor: theme.backgroundColor.light_purple,

                headerLeft: () => (
                    <Icon name="navicon" size={18} onPress={navigation.toggleDrawer} style={styles.leftIcon} />
                ),
                headerTitleAlign: 'center',
            })}
        >
            <Drawer.Screen
                name={DrawerNavigationNames.DAILY_TASKS}
                component={DailyTasksScreen}
                options={{
                    drawerIcon: () => <Icon name="calendar" size={24} color={theme.color.light_grey} />,
                }}
            />
            <Drawer.Screen
                name={DrawerNavigationNames.IMPORTANT_TASKS}
                component={ImportantTasksScreen}
                options={{
                    drawerIcon: () => <Icon name="star" size={24} color={theme.color.light_grey} />,
                }}
            />
            <Drawer.Screen
                name={DrawerNavigationNames.DONE_TASKS}
                component={DoneTasksScreen}
                options={{
                    drawerIcon: () => <Icon name="check-square-o" size={24} color={theme.color.light_grey} />,
                }}
            />
        </Drawer.Navigator>
    );
};
