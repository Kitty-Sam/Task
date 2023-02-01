import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '~components/Category/style';
import { CategoryPropsType } from '~components/Category/type';
import { theme } from '~constants/Theme';

export const Category: FC<CategoryPropsType> = ({ title, counter, icon, backgroundColor, onPress, testID }) => {
    return (
        <TouchableOpacity style={[styles.containerStyle, { backgroundColor: backgroundColor }]} onPress={onPress}>
            <Text style={styles.counter}>{title === 'Add' ? '' : counter}</Text>
            <Icon name={icon} size={24} color={theme.color.white} />
            <Text style={styles.title} testID={testID}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
