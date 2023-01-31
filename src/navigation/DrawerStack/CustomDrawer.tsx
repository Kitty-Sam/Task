import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import { AppButtonWithoutBackGround } from '~components/AppButtonWithoutBackGround';
import { Gap } from '~components/Gap';
import { theme } from '~constants/Theme';
import { DrawerStackParamList } from '~navigation/DrawerStack/index';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
    const navigation = useNavigation<StackNavigationProp<DrawerStackParamList>>();
    const goBackPress = () => {
        navigation.goBack();
    };
    return (
        <DrawerContentScrollView {...props}>
            <Gap size={5} />
            <AppButtonWithoutBackGround
                onPress={goBackPress}
                title="Back to main menu"
                color={theme.backgroundColor.light_purple}
            />
            <Gap size={10} />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};
