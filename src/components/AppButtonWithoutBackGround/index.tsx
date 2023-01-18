import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { AppButtonWithoutBackgroundType } from '~components/AppButtonWithoutBackGround/type';

import { styles } from './styles';

export const AppButtonWithoutBackGround: FC<AppButtonWithoutBackgroundType> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};
