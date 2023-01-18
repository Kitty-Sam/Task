import CheckBox from '@react-native-community/checkbox';
import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { theme } from '~constants/Theme';
import { TaskType } from '~store/reducers/tasksReducer';
import { removeTaskAction } from '~store/sagasActions/removeTask';

export const TaskContainer: FC<TaskType> = ({ title, id }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const dispatch = useDispatch();

    const onRemovePress = (taskId: string) => {
        dispatch(removeTaskAction({ taskId: taskId }));
    };

    return (
        <View
            style={{
                width: 300,
                padding: 16,
                borderWidth: 1,
                borderColor: theme.color.light_grey,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                margin: 8,
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
            <TouchableOpacity onPress={() => onRemovePress(id)}>
                <Text>----</Text>
            </TouchableOpacity>
        </View>
    );
};
