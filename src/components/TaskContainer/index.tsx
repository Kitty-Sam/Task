import CheckBox from '@react-native-community/checkbox';
import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { theme } from '~constants/Theme';

export interface TaskType {
    title: string;
}

export const TaskContainer: FC<TaskType> = ({ title }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
        <View
            style={{
                width: 300,
                borderWidth: 1,
                borderColor: theme.color.light_grey,
                borderRadius: 10,
                flexDirection: 'row',
            }}
        >
            <View style={{ flexDirection: 'column' }}>
                <Text>start time</Text>
                <Text>end time</Text>
            </View>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <View style={{ flexDirection: 'column' }}>
                <Text>{title}</Text>
                <Text>description</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    console.log('press');
                }}
            >
                <Text>----</Text>
            </TouchableOpacity>
        </View>
    );
};
