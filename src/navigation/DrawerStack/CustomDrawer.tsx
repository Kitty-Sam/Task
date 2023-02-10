import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';

import { AppButtonWithoutBackGround } from '~components/AppButton';
import { theme } from '~constants/Theme';
import { DrawerStackParamList } from '~navigation/DrawerStack/index';
import { styles } from '~navigation/DrawerStack/style';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
    const navigation = useNavigation<StackNavigationProp<DrawerStackParamList>>();
    const goBackPress = () => {
        navigation.goBack();
    };
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.buttonContainer}>
                <AppButtonWithoutBackGround
                    onPress={goBackPress}
                    title="Back to main menu"
                    color={theme.backgroundColor.light_purple}
                />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};
