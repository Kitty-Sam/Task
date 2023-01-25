import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';

import { styles } from '~components/TaskContainer/styles';
import { TaskContainerPropsType } from '~components/TaskContainer/type';
import { theme } from '~constants/Theme';
import { RootNavigationNames } from '~navigation/RootStack';
import { removeTaskAction } from '~store/sagasActions/removeTask';
import { toggleIsDoneTaskAction } from '~store/sagasActions/toggleIsDoneTask';
import { getFromFB } from '~utils/getProperTime';
import { getShortString } from '~utils/getShortString';

export const TaskContainer: FC<TaskContainerPropsType> = ({ task }) => {
    const { isDone, taskId, title, time, description } = task;
    const { till, from } = time;

    const [isTaskDone, setIsTaskDone] = useState(isDone);

    const navigation = useNavigation<any>();

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

    const onDoneTaskChangePress = () => {
        setIsTaskDone(!isTaskDone);
        dispatch(toggleIsDoneTaskAction(task));
    };

    const onProperTaskPress = () => {
        navigation.navigate(RootNavigationNames.TASK, {
            task,
        });
    };

    return (
        <TouchableOpacity style={styles.rootContainer} onPress={onProperTaskPress}>
            <View style={styles.dataContainer}>
                <Text>{getFromFB(from)}</Text>
                <Text>{getFromFB(till)}</Text>
            </View>
            <TouchableOpacity>
                <CheckBox
                    disabled={false}
                    value={isTaskDone}
                    onValueChange={onDoneTaskChangePress}
                    style={styles.checkbox}
                    onTintColor={theme.backgroundColor.light_purple}
                    onCheckColor={theme.backgroundColor.light_purple}
                />
            </TouchableOpacity>
            <View style={styles.dataContainer}>
                <Text style={styles.titleText}>{getShortString(title, 10)}</Text>
                <Text>{getShortString(description, 20)}</Text>
            </View>

            <Icon name="ellipsis-v" size={18} onPress={onRemovePress} style={styles.iconContainer} />
        </TouchableOpacity>
    );
};
