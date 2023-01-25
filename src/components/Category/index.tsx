import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '~components/Category/style';
import { CategoryPropsType } from '~components/Category/type';
import { theme } from '~constants/Theme';

export const Category: FC<CategoryPropsType> = ({ title, counter, icon, backgroundColor, style, onPress }) => {
    return (
        <>
            {!title ? (
                <TouchableOpacity
                    style={[
                        styles.containerStyle,
                        {
                            backgroundColor: backgroundColor,
                            borderColor: theme.color.pink,
                            borderWidth: theme.borderWidth['1'],
                        },
                    ]}
                >
                    <Icon name={icon} size={24} color={theme.color.pink} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={[styles.containerStyle, { backgroundColor: backgroundColor }]}
                    onPress={onPress}
                >
                    <Text style={styles.counter}>{counter}</Text>
                    <Icon name={icon} size={24} color={theme.color.white} />
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
            )}
        </>
    );
};
