import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { AppButtonWithoutBackgroundType } from '~components/AppButton/type';
import { theme } from '~constants/Theme';

import { styles } from './styles';

export const AppButtonWithoutBackGround: FC<AppButtonWithoutBackgroundType> = ({
    title,
    onPress,
    color = theme.color.blue,
    backgroundColor,
    testID,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.containerStyle, { backgroundColor, paddingHorizontal: backgroundColor && '20%' }]}
            testID={testID}
        >
            <Text
                style={[styles.textStyle, { color: backgroundColor ? theme.color.white : color }]}
                testID={`${testID}.label`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};
