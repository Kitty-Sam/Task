import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { RootNavigationNames } from '~navigation/RootStack';
import { styles } from '~screens/LaunchScreen/style';
import { LaunchSvg } from '~src/svg/LaunchSvg';

export const LaunchScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={styles.root}>
            <LaunchSvg />
            <TouchableOpacity onPress={() => navigation.navigate(RootNavigationNames.TASKS)}>
                <Text>get started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
