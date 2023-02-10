import messaging from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
// eslint-disable-next-line import/default
import PushNotification from 'react-native-push-notification';
import SplashScreen from 'react-native-splash-screen';

import { RootStack } from '~navigation/RootStack';

export const App = () => {
    const getPushData = async (message: any) => {
        PushNotification.localNotification({
            channelId: 'not1',
            message: message.notification.body,
            title: message.notification.title,
        });
    };

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    useEffect(() => {
        messaging().onMessage(getPushData);
        messaging().setBackgroundMessageHandler(getPushData);
    }, []);

    return <RootStack />;
};
