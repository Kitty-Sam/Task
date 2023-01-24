import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import { AppButtonWithoutBackGround } from '~components/AppButtonWithoutBackGround';
import { Gap } from '~components/Gap';
import { theme } from '~constants/Theme';
import { DrawerStackParamList } from '~navigation/DrawerStack/index';

export const CustomDrawer = (props: any) => {
    const navigation = useNavigation<StackNavigationProp<DrawerStackParamList>>();
    const goBackPress = () => {
        navigation.goBack();
    };
    return (
        <DrawerContentScrollView {...props}>
            <AppButtonWithoutBackGround
                onPress={goBackPress}
                title="Back to main menu"
                color={theme.color.light_grey}
            />
            <Gap size={10} />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};
