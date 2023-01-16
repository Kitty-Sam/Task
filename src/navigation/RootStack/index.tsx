import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { DrawerStack } from '~navigation/DrawerStack';
import { LaunchScreen } from '~screens/LaunchScreen';

export enum RootNavigationNames {
    LAUNCH = 'Launch',
    TASKS = 'Tasks',
}

export type RootStackParamList = {
    [RootNavigationNames.LAUNCH]: undefined;
    [RootNavigationNames.TASKS]: undefined;
};

const Root = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            <Root.Screen name={RootNavigationNames.LAUNCH} component={LaunchScreen} />
            <Root.Screen name={RootNavigationNames.TASKS} component={DrawerStack} />
        </Root.Navigator>
    );
};
