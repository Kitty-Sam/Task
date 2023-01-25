import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import React, { FC, useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
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

export type ContextAnimationType = {
    translateX: number;
};

export const TaskContainer: FC<TaskContainerPropsType> = ({ task, trashId, updateTrashVisibility }) => {
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

    ///animation block
    const translateX = useSharedValue(0);

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
            ],
        };
    });

    const rIconContainer = useAnimatedStyle(() => {
        const opacity = withTiming(Math.abs(translateX.value) < 70 ? 0 : 1);
        return { opacity };
    });

    useEffect(() => {
        if (trashId !== taskId && trashId !== null) {
            translateX.value = withTiming(0);
        }
    }, [trashId]);

    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextAnimationType>({
        onStart: () => {
            translateX.value = withTiming(0);
        },

        onActive: (event) => {
            translateX.value = event.translationX;
        },
        onEnd: (event) => {
            const positionX = event.translationX;

            -positionX > 70 ? (translateX.value = withTiming(-70)) : (translateX.value = withTiming(0));

            runOnJS(updateTrashVisibility)(taskId);
        },
    });

    return (
        <>
            <PanGestureHandler onGestureEvent={panGestureEvent}>
                <Animated.View
                    style={[styles.rootContainer, rStyle]}
                    // onStartShouldSetResponder={() => true}
                    // onResponderGrant={() => onProperTaskPress()}
                >
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
                </Animated.View>
            </PanGestureHandler>
            <Animated.View style={[styles.trashIconContainer, rIconContainer]}>
                <Icon name={'trash'} onPress={onRemovePress} size={20} />
            </Animated.View>
        </>
    );
};
