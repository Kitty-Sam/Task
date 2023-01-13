import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';

import { DrawerStack } from '~navigation/DrawerStack';
import { LaunchScreen } from '~screens/LaunchScreen';
import { RequestStatus } from '~store/reducers/appReducer';
import { getAppStatus } from '~store/selectors/appSelector';

export const App = () => {
    const initStatus = useSelector(getAppStatus);
    return (
        <NavigationContainer>
            {initStatus === RequestStatus.FIRST_LAUNCH ? <LaunchScreen /> : <DrawerStack />}
        </NavigationContainer>
    );
};
