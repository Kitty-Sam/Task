import 'react-native-gesture-handler';

import React from 'react';
import { AppRegistry, Platform } from 'react-native';
// eslint-disable-next-line import/default
import PushNotification from 'react-native-push-notification';
import { Provider } from 'react-redux';

import { store } from '~store/store';

import { App } from './App';
import { name as appName } from './app.json';

export const ReduxApp = () => {
    PushNotification.configure({
        onNotification: function (notification) {
            console.log('LOCAL NOTIFICATION ==>', notification);
        },

        popInitialNotification: true,
        requestPermissions: Platform.OS === 'ios',
    });

    PushNotification.createChannel(
        {
            channelId: 'not1',
            channelName: 'Channel',
        },
        (created) => console.log(`createChannel returned '${created}'`),
    );

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => ReduxApp);
