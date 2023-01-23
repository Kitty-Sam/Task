import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { theme } from '~constants/Theme';
import { styles } from '~screens/TodosScreen/style';

const Index = () => {
    return (
        <TouchableOpacity
            style={[
                styles.sortValueContainer,
                { backgroundColor: filter === item ? theme.backgroundColor.green : theme.color.white },
            ]}
            key={item}
            onPress={() => {
                setFilter(item);
            }}
        >
            <Text
                style={[styles.sortValueText, { color: filter === item ? theme.color.white : theme.color.light_grey }]}
            >
                {item}
            </Text>
        </TouchableOpacity>
    );
};

export default Index;
