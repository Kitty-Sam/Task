import React, { FC, memo, useEffect } from 'react';
import { Image, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppButtonWithoutBackGround } from '~components/AppButton';
import { TextBlock } from '~components/TextBlock';
import { theme } from '~constants/Theme';
import { launchParagraph, launchTitle } from '~constants/Typography';
import { RootNavigationNames } from '~navigation/RootStack';
import { LaunchScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/LaunchScreen/style';
import { getDeviceIdAction } from '~store/sagasActions/actions/getDeviceId';

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
            <Image source={require('~assets/launch_good.png')} style={styles.image} />
            <TextBlock title={launchTitle} paragraph={launchParagraph} />
            <AppButtonWithoutBackGround
                onPress={onGetStartedPress}
                title={'Get started'}
                testID="Launch"
                backgroundColor={theme.backgroundColor.light_purple}
            />
        </SafeAreaView>
    );
});
