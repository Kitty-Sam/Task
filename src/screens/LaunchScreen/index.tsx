import React, { FC, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppButton } from '~components/AppButton';
import { TextBlock } from '~components/TextBlock';
import { launchText } from '~constants/Typography';
import { RootNavigationNames } from '~navigation/RootStack';
import { LaunchScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/LaunchScreen/style';
import { LaunchSvg } from '~src/svg/LaunchSvg';
import { getDeviceIdAction } from '~store/sagasActions/getDeviceId';

const { title, paragraph } = launchText;

export const LaunchScreen: FC<LaunchScreenProps> = ({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDeviceIdAction());
    }, []);

    const onGetStartedPress = () => {
        navigation.navigate(RootNavigationNames.TODOS);
    };

    return (
        <SafeAreaView style={styles.root}>
            <LaunchSvg />
            <TextBlock title={title} paragraph={paragraph} />
            <AppButton onPress={onGetStartedPress} title={'Get started'} />
        </SafeAreaView>
    );
};
