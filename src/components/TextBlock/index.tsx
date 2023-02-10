import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from '~components/TextBlock/styles';
import { TextBlockType } from '~components/TextBlock/type';

export const TextBlock: FC<TextBlockType> = ({ title, paragraph }) => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.paragraph}>{paragraph}</Text>
        </View>
    );
};
