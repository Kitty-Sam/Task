import CheckBox from '@react-native-community/checkbox';
import React, { FC, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from '~components/TaskContainer/styles';
import { TaskType } from '~store/reducers/tasksReducer';
import { removeTaskAction } from '~store/sagasActions/removeTask';
import { toggleIsDoneTaskAction } from '~store/sagasActions/toggleIsDoneTask';

export const TaskContainer: FC<TaskType> = ({ title, taskId, description, isDone, time, chapter }) => {
    const [isTaskDone, setIsTaskDone] = useState(isDone);

    const dispatch = useDispatch();

    const onRemovePress = () => {
        Alert.alert('Remove task', 'Are you sure?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => dispatch(removeTaskAction({ taskId })) },
        ]);
    };

    const onDoneTaskChangePress = async () => {
        setIsTaskDone(!isTaskDone);
        dispatch(toggleIsDoneTaskAction({ taskId, time, title, chapter, description, isDone }));
    };

    return (
        <View style={styles.rootContainer}>
            <View style={styles.dataContainer}>
                <Text>start time</Text>
                <Text>end time</Text>
            </View>
            <CheckBox
                disabled={false}
                value={isTaskDone}
                onValueChange={onDoneTaskChangePress}
                style={styles.checkbox}
            />
            <View style={styles.dataContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text>{description}</Text>
            </View>
            <TouchableOpacity onPress={onRemovePress} style={styles.iconContainer}>
                <Text>#</Text>
            </TouchableOpacity>
        </View>
    );
};
