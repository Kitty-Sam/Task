import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';
import moment from 'moment';
import React, { FC, useState } from 'react';
import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';

import { AppButtonWithoutBackGround } from '~components/AppButton';
import { CustomTextInput } from '~components/CustomTextInput';
import { DatePickerTemplate } from '~components/DatePickerTemplate';
import { styles } from '~components/ModalTemplate/styles';
import { ModalWindow } from '~components/ModalTemplate/type';
import { theme } from '~constants/Theme';
import { useDatePicker } from '~hooks/UseDatePicker';
import { UseDatePickerResponseType } from '~hooks/UseDatePicker/type';
import { useInput } from '~hooks/UseInput';
import { addTaskAction } from '~store/sagasActions/actions/addTask';
import { saveToFB } from '~utils/getProperTime';

export const ModalTemplate: FC<ModalWindow> = ({ isOpen, setIsOpen, chapter }) => {
    const [isTaskImportant, setIsTaskImportant] = useState(false);
    const [isAddedExtraInfo, setIsAddedExtraInfo] = useState(false);

    const dispatch = useDispatch();

    const userTaskTitle = useInput('');
    const userTaskDescription = useInput('');
    const userExtraInfo = useInput('');

    const fromDate = useDatePicker(false, new Date());
    const tillDate = useDatePicker(false, new Date());

    const onClearPress = () => {
        userTaskTitle.resetValue();
        userTaskDescription.resetValue();
    };

    const onClosePress = () => {
        setIsOpen(false);
    };

    const newTask = {
        chapter,
        title: userTaskTitle.value,
        description: userTaskDescription.value,
        taskId: String(Date.now()),
        time: { from: fromDate.dateValue.toString(), till: tillDate.dateValue.toString() },
        isDone: false,
        isImportant: isTaskImportant,
        extraInfo: userExtraInfo.value,
    };

    //notifications
    const onCreateTriggerNotification = async () => {
        await notifee.requestPermission();

        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Android Channel',
        });

        const date = new Date(Date.now());
        date.setHours(fromDate.dateValue.getHours());
        date.setMinutes(fromDate.dateValue.getMinutes());

        const trigger: TimestampTrigger = {
            type: TriggerType.TIMESTAMP,
            timestamp: date.getTime(),
        };

        await notifee.createTriggerNotification(
            {
                title: userTaskTitle.value,
                body: userTaskDescription.value,
                android: {
                    channelId: channelId,
                },
            },
            trigger,
        );
    };

    const onSavePress = async () => {
        if (
            userTaskTitle.value.trim() === '' &&
            userTaskDescription.value.trim() === '' &&
            !moment(tillDate.dateValue).isAfter(moment(fromDate.dateValue))
        ) {
            Alert.alert('Try again');
            onClearPress();
            return;
        }

        await onCreateTriggerNotification();
        dispatch(
            addTaskAction({
                ...newTask,
            }),
        );
        onClearPress();
        setIsOpen(false);
    };

    const onImportantTaskChangePress = () => {
        setIsTaskImportant(!isTaskImportant);
    };

    const onFocusDatePress = (date: UseDatePickerResponseType) => () => {
        date.setIsOpen();
    };

    return (
        <View style={styles.modalWrapper}>
            <Modal
                animationType="fade"
                visible={isOpen}
                onRequestClose={() => {
                    setIsOpen(!isOpen);
                }}
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.boldText}>Enter your task</Text>
                        <TouchableOpacity onPress={onImportantTaskChangePress} style={styles.starIcon}>
                            <Icon name={isTaskImportant ? 'star' : 'star-o'} size={24} color={theme.color.yellow} />
                        </TouchableOpacity>
                        <CustomTextInput {...userTaskTitle} placeholder="Enter title" />
                        <CustomTextInput {...userTaskDescription} placeholder="Enter description" />
                        <View style={styles.timeContainer}>
                            <Text style={styles.boldText}>from: </Text>
                            <TextInput
                                value={saveToFB(fromDate.dateValue)}
                                onFocus={onFocusDatePress(fromDate)}
                                style={{ color: theme.color.light_grey }}
                            />
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.boldText}>up till: </Text>
                            <TextInput
                                value={saveToFB(tillDate.dateValue)}
                                onFocus={onFocusDatePress(tillDate)}
                                style={{ color: theme.color.light_grey }}
                            />
                        </View>

                        {isAddedExtraInfo ? (
                            <CustomTextInput {...userExtraInfo} placeholder={'Enter extra info'} />
                        ) : (
                            <AppButtonWithoutBackGround
                                onPress={() => setIsAddedExtraInfo(true)}
                                title={'Add extra info'}
                                color={theme.color.light_grey}
                            />
                        )}

                        <DatePickerTemplate {...fromDate} />
                        <DatePickerTemplate {...tillDate} />

                        <View style={styles.buttonsContainer}>
                            <AppButtonWithoutBackGround onPress={onSavePress} title="ok" />
                            <AppButtonWithoutBackGround
                                onPress={onClosePress}
                                title="cancel"
                                color={theme.color.pink}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
