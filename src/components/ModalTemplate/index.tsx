import React, { FC } from 'react';
import { Alert, Modal, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppButtonWithoutBackGround } from '~components/AppButtonWithoutBackGround';
import { CustomTextInput } from '~components/CustomTextInput';
import { styles } from '~components/ModalTemplate/styles';
import { ModalWindow } from '~components/ModalTemplate/type';
import { useInput } from '~hooks/UseInput';
import { addTaskAction } from '~store/sagasActions/addTask';

export const ModalTemplate: FC<ModalWindow> = ({ isOpen, setIsOpen, chapter }) => {
    const userTaskTitle = useInput('');
    const userTaskDescription = useInput('');

    const taskId = String(Date.now());

    const onClearPress = () => {
        userTaskTitle.resetValue();
        userTaskDescription.resetValue();
    };

    const dispatch = useDispatch();

    const onSavePress = async () => {
        if (userTaskTitle.value.trim() !== '' && userTaskDescription.value.trim() !== '') {
            dispatch(
                addTaskAction({
                    chapter,
                    title: userTaskTitle.value,
                    description: userTaskDescription.value,
                    taskId,
                    time: '',
                }),
            );
            onClearPress();
            setIsOpen(false);
        } else {
            Alert.alert('Enter data');
            onClearPress();
        }
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
                        <CustomTextInput {...userTaskTitle} placeholder={'Enter title'} />
                        <CustomTextInput {...userTaskDescription} placeholder={'Enter description'} />
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
