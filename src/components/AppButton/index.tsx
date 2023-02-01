import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from '~components/AppButton/styles';
import { AppButtonType } from '~components/AppButton/type';
import { theme } from '~constants/Theme';

export const AppButton: FC<AppButtonType> = ({
    title,
    onPress,
    backgroundColor = theme.backgroundColor.light_purple,
    testID,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.containerStyle, { backgroundColor }]} testID={testID}>
            <Text style={styles.textStyle} testID={`${testID}.label`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
