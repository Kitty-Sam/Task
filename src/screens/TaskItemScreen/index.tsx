import React, { FC, memo, useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppButtonWithoutBackGround } from '~components/AppButton';
import { CustomTextInput } from '~components/CustomTextInput';
import { theme } from '~constants/Theme';
import { useInput } from '~hooks/UseInput';
import { TaskScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/TaskItemScreen/style';
import { editTaskAction } from '~store/sagasActions/actions/editTask';
import { getFromFB, getFromFBDay } from '~utils/getProperTime';
import { getShortString } from '~utils/getShortString';

export const TaskItemScreen: FC<TaskScreenProps> = memo(({ navigation, route: { params } }) => {
    const { task, isEdit } = params;
    const { title, time, description, extraInfo } = task;
    console.log('task', task);

    const [isEditText, setIsEdit] = useState(isEdit);
    const userTitle = useInput(title);
    const userDescription = useInput(description);
    const userExtra = useInput(extraInfo);

    const dispatch = useDispatch();

    useEffect(() => {
        navigation.setOptions({ headerTitle: getShortString(task.title, 15) });
    }, [task.title]);

    const onSavePress = () => {
        if (userTitle.value.trim() === '' && userDescription.value.trim() === '') {
            Alert.alert('Try again');
            return;
        }

        dispatch(
            editTaskAction({
                ...task,
                description: userDescription.value,
                title: userTitle.value,
                extraInfo: userExtra.value,
            }),
        );
        setIsEdit(false);
        navigation.goBack();
    };

    const onCancelPress = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.boldText}>{task.chapter}</Text>
            </View>
            <Text>
                {getFromFB(time.from)} - {getFromFB(time.till)}
            </Text>
            <Text>{getFromFBDay(time.from)}</Text>
            <View style={styles.viewContainer} />
            <Text style={styles.boldText}>Title</Text>
            {isEditText ? (
                <CustomTextInput {...userTitle} placeholder={'edit title'} />
            ) : (
                <Text style={styles.extraTitleText}>{title}</Text>
            )}
            <View style={styles.viewContainer} />
            <Text style={styles.boldText}>Description</Text>
            {isEditText ? (
                <CustomTextInput {...userDescription} placeholder={'edit description'} />
            ) : (
                <Text style={styles.extraTitleText}>{description}</Text>
            )}
            <View style={styles.viewContainer} />
            <Text style={styles.boldText}>Additional Description</Text>

            {isEditText ? (
                <CustomTextInput {...userExtra} placeholder={'edit extra info'} />
            ) : (
                <Text style={styles.extraTitleText}>{extraInfo ? extraInfo : '---'}</Text>
            )}

            {isEditText && (
                <View style={styles.buttonContainer}>
                    <AppButtonWithoutBackGround onPress={onSavePress} title={'save'} />
                    <AppButtonWithoutBackGround onPress={onCancelPress} title={'cancel'} color={theme.color.pink} />
                </View>
            )}
        </ScrollView>
    );
});
