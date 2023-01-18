import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC, useEffect, useState } from 'react';
import { Modal, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppButton } from '~components/AppButton';
import { addTaskAC } from '~store/actions/tasksAC';
import { database } from '~utils/getDataBaseURL';

interface ModalWindow {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    chapter: string;
    deviceId: string;
}

const taskId = String(Date.now());

export const ModalTemplate: FC<ModalWindow> = ({ isOpen, setIsOpen, chapter, deviceId }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onClearPress = () => {
        setDescription('');
        setTitle('');
    };

    const dispatch = useDispatch();

    const onSavePress = async () => {
        await database.ref(`/${deviceId}/`).child('tasks').child(taskId).set({ chapter, title, description, taskId });
        dispatch(addTaskAC({ chapter, title, description, id: taskId, time: '' }));
        setDescription('');
        setTitle('');
        setIsOpen(false);
    };

    return (
        <Modal
            animationType="slide"
            visible={isOpen}
            onRequestClose={() => {
                setIsOpen(!isOpen);
            }}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder={'enter title'}
                    style={{ width: 300, borderWidth: 1, borderColor: 'red', height: 40 }}
                />
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    placeholder={'enter description'}
                    style={{ width: 300, borderWidth: 1, borderColor: 'red', height: 40 }}
                />
                <AppButton onPress={onSavePress} title={'ok'} />
                <AppButton onPress={onClearPress} title={'clear'} />
            </View>
        </Modal>
    );
};
