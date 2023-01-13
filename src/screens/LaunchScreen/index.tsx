import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from '~screens/LaunchScreen/style';
import { LaunchSvg } from '~src/svg/LaunchSvg';
import { toggleAppStatus } from '~store/actions/appAC';
import { RequestStatus } from '~store/reducers/appReducer';

export const LaunchScreen = () => {
    const dispatch = useDispatch();
    const onGetStartedPress = () => {
        dispatch(toggleAppStatus(RequestStatus.SECOND_LAUNCH));
    };

    return (
        <SafeAreaView style={styles.root}>
            <LaunchSvg />
            <TouchableOpacity onPress={onGetStartedPress}>
                <Text>get started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
