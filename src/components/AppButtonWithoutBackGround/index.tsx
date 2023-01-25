import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { AppButtonWithoutBackgroundType } from '~components/AppButtonWithoutBackGround/type';
import { theme } from '~constants/Theme';

import { styles } from './styles';

export const AppButtonWithoutBackGround: FC<AppButtonWithoutBackgroundType> = ({
    title,
    onPress,
    color = theme.color.blue,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
            <Text style={[styles.textStyle, { color }]}>{title}</Text>
        </TouchableOpacity>
    );
};
