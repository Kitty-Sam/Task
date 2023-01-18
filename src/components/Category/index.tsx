import React, { FC } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

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
                    <Image source={icon} style={style} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={[styles.containerStyle, { backgroundColor: backgroundColor }]}
                    onPress={onPress}
                >
                    <Text style={styles.counter}>{counter}</Text>
                    <Image source={icon} style={style} />
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
            )}
        </>
    );
};
