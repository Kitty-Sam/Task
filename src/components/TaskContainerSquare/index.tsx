import { useNavigation, useNavigationState } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Gap } from '~components/Gap';
import { TaskContainerPropsType } from '~components/TaskContainer/type';
import { styles } from '~components/TaskContainerSquare/styles';
import { theme } from '~constants/Theme';
import { DrawerNavigationNames } from '~navigation/DrawerStack';
import { RootNavigationNames } from '~navigation/RootStack';
import { getProperIconName } from '~utils/gerPropeIconName';
import { getFromFBShortDay } from '~utils/getProperTime';

export const TaskContainerSquare: FC<TaskContainerPropsType> = ({ task }) => {
    const { title, description, isImportant, chapter, isDone } = task;

    const navigation = useNavigation<any>();

    const onProperTaskPress = () => {
        navigation.navigate(RootNavigationNames.TASK, {
            task,
        });
    };

    const appState = useNavigationState((state) => state);
    const routeName = appState.routeNames[appState.index];

    return (
        <TouchableOpacity onPress={onProperTaskPress} style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <Icon name={getProperIconName(chapter)} size={24} />
                <Text style={styles.text}>{getFromFBShortDay(task.time.till)}</Text>
                {routeName === DrawerNavigationNames.DONE_TASKS && isImportant ? (
                    <Icon name={'star'} size={24} color={theme.color.yellow} />
                ) : (
                    <></>
                )}
                {routeName === DrawerNavigationNames.IMPORTANT_TASKS && isDone ? (
                    <Icon name={'check'} size={24} color={theme.color.black} />
                ) : (
                    <></>
                )}
            </View>
            <Gap size={1} />
            <Text style={styles.boldText}>{title}</Text>
            <Gap size={1} />
            <Text style={styles.text}>{description}</Text>
        </TouchableOpacity>
    );
};
