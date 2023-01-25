import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { TaskContainerPropsType } from '~components/TaskContainer/type';
import { styles } from '~components/TaskContainerSquare/styles';
import { theme } from '~constants/Theme';
import { RootNavigationNames } from '~navigation/RootStack';
import { getProperIconName } from '~utils/gerPropeIconName';
import { getFromFBShortDay } from '~utils/getProperTime';

export const TaskContainerSquare: FC<TaskContainerPropsType> = ({ task }) => {
    const { title, description, isImportant, chapter } = task;

    const navigation = useNavigation<any>();

    const onProperTaskPress = () => {
        navigation.navigate(RootNavigationNames.TASK, {
            task,
        });
    };

    return (
        <TouchableOpacity onPress={onProperTaskPress} style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <Icon name={getProperIconName(chapter)} size={24} />
                <Text>{getFromFBShortDay(task.time.till)}</Text>
                {isImportant && <Icon name={'star'} size={24} color={theme.color.yellow} />}
            </View>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>
    );
};
