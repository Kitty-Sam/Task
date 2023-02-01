import React, { FC, memo, useEffect } from 'react';
import { Image, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppButton } from '~components/AppButton';
import { TextBlock } from '~components/TextBlock';
import { launchText } from '~constants/Typography';
import { RootNavigationNames } from '~navigation/RootStack';
import { LaunchScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/LaunchScreen/style';
import { getDeviceIdAction } from '~store/sagasActions/getDeviceId';

const { title, paragraph } = launchText;
const img = require('../../../assets/launch_good.png');

export const LaunchScreen: FC<LaunchScreenProps> = memo(({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDeviceIdAction());
    }, []);

    const onGetStartedPress = () => {
        navigation.navigate(RootNavigationNames.TODOS);
    };

    return (
        <SafeAreaView style={styles.root}>
            <Image source={img} style={styles.image} />
            <TextBlock title={title} paragraph={paragraph} />
            <AppButton onPress={onGetStartedPress} title={'Get started'} testID="Launch" />
        </SafeAreaView>
    );
});
