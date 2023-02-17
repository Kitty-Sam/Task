import 'react-native-gesture-handler';

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { store } from '~store/store';

import { App } from './App';
import { name as appName } from './app.json';

export const ReduxApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => ReduxApp);
