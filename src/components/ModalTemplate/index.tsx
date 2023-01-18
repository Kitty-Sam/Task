import React, { FC, useState } from 'react';
import { Alert, Modal, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppButton } from '~components/AppButton';
import { AppButtonWithoutBackGround } from '~components/AppButtonWithoutBackGround';
import { theme } from '~constants/Theme';
import { addTaskAction } from '~store/sagasActions/addTask';

interface ModalWindow {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    chapter: string;
}

export const ModalTemplate: FC<ModalWindow> = ({ isOpen, setIsOpen, chapter }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const taskId = String(Date.now());

    const onClearPress = () => {
        setDescription('');
        setTitle('');
    };

    const dispatch = useDispatch();

    const onSavePress = async () => {
        if (title.trim() && description.trim()) {
            dispatch(addTaskAction({ chapter, title, description, taskId, time: '' }));
            onClearPress();
            setIsOpen(false);
        } else {
            Alert.alert('Enter data');
            onClearPress();
        }
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
                    placeholder={'Enter title'}
                    style={{
                        width: 300,
                        borderWidth: 1,
                        borderColor: theme.color.blue,
                        height: 50,
                        borderRadius: 10,
                        marginVertical: 10,
                        paddingLeft: 16,
                    }}
                />
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    placeholder={'Enter description'}
                    style={{
                        width: 300,
                        borderWidth: 1,
                        borderColor: theme.color.blue,
                        height: 50,
                        borderRadius: 10,
                        marginVertical: 10,
                        paddingLeft: 16,
                    }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%' }}>
                    <AppButtonWithoutBackGround onPress={onSavePress} title={'ok'} />
                    <AppButtonWithoutBackGround
                        onPress={onClearPress}
                        title={'clear'}
                        backgroundColor={theme.backgroundColor.green_and_blue}
                    />
                </View>
            </View>
        </Modal>
    );
};
