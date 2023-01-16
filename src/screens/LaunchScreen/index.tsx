import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

import { AppButton } from '~components/AppButton';
import { TextBlock } from '~components/TextBlock';
import { launchText } from '~constants/Typography';
import { RootNavigationNames } from '~navigation/RootStack';
import { LaunchScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/LaunchScreen/style';
import { LaunchSvg } from '~src/svg/LaunchSvg';

const { title, paragraph } = launchText;

export const LaunchScreen: FC<LaunchScreenProps> = ({ navigation }) => {
    const onGetStartedPress = () => {
        navigation.navigate(RootNavigationNames.TASKS);
    };

    return (
        <SafeAreaView style={styles.root}>
            <LaunchSvg />
            <TextBlock title={title} paragraph={paragraph} />
            <AppButton onPress={onGetStartedPress} title={'Get started'} />
        </SafeAreaView>
    );
};
