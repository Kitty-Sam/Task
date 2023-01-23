import moment from 'moment';
import React, { FC } from 'react';
import { Alert, Modal, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppButtonWithoutBackGround } from '~components/AppButtonWithoutBackGround';
import { CustomTextInput } from '~components/CustomTextInput';
import { DatePickerTemplate } from '~components/DatePickerTemplate';
import { styles } from '~components/ModalTemplate/styles';
import { ModalWindow } from '~components/ModalTemplate/type';
import { useDatePicker } from '~hooks/UseDatePicker';
import { useInput } from '~hooks/UseInput';
import { addTaskAction } from '~store/sagasActions/addTask';
import { saveToFB } from '~utils/getProperTime';

export const ModalTemplate: FC<ModalWindow> = ({ isOpen, setIsOpen, chapter }) => {
    const userTaskTitle = useInput('');
    const fromDate = useDatePicker(false, new Date());
    const tillDate = useDatePicker(false, new Date());

    const userTaskDescription = useInput('');

    const taskId = String(Date.now());

    const onClearPress = () => {
        userTaskTitle.resetValue();
        userTaskDescription.resetValue();
    };

    const dispatch = useDispatch();

    const onSavePress = () => {
        if (
            userTaskTitle.value.trim() === '' &&
            userTaskDescription.value.trim() === '' &&
            !moment(tillDate.dateValue).isAfter(moment(fromDate.dateValue))
        ) {
            Alert.alert('Try again');
            onClearPress();
            return;
        }

        dispatch(
            addTaskAction({
                chapter,
                title: userTaskTitle.value,
                description: userTaskDescription.value,
                taskId,
                time: { from: fromDate.dateValue.toString(), till: tillDate.dateValue.toString() },
                isDone: false,
            }),
        );
        onClearPress();
        setIsOpen(false);
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
                        <Text>Enter your task</Text>
                        <CustomTextInput {...userTaskTitle} placeholder="Enter title" />
                        <CustomTextInput {...userTaskDescription} placeholder="Enter description" />
                        <View>
                            <Text>from </Text>
                            <TextInput value={saveToFB(fromDate.dateValue)} onFocus={() => fromDate.setIsOpen()} />
                        </View>
                        <View>
                            <Text>till </Text>
                            <TextInput value={saveToFB(tillDate.dateValue)} onFocus={() => tillDate.setIsOpen()} />
                        </View>

                        <DatePickerTemplate {...fromDate} />
                        <DatePickerTemplate {...tillDate} />
                        <View style={styles.buttonsContainer}>
                            <AppButtonWithoutBackGround onPress={onSavePress} title={'ok'} />
                            <AppButtonWithoutBackGround onPress={onClearPress} title={'clear'} />
                            <AppButtonWithoutBackGround onPress={() => setIsOpen(false)} title={'close'} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
