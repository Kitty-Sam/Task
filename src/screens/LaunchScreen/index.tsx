import React, { FC, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton } from '~components/AppButton';
import { TextBlock } from '~components/TextBlock';
import { launchText } from '~constants/Typography';
import { RootNavigationNames } from '~navigation/RootStack';
import { LaunchScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/LaunchScreen/style';
import { LaunchSvg } from '~src/svg/LaunchSvg';
import { fetchTasksAction } from '~store/sagasActions/fetchTasks';
import { getDeviceIdAction } from '~store/sagasActions/getDeviceId';
import { getDeviceId } from '~store/selectors/appSelector';

const { title, paragraph } = launchText;

export const LaunchScreen: FC<LaunchScreenProps> = ({ navigation }) => {
    const deviceId = useSelector(getDeviceId);

    console.log('deviceId', deviceId);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDeviceIdAction());
    }, []);
    // const storeData = async (id: string, tasks: TaskType[]) => {
    //     try {
    //         await AsyncStorage.setItem('deviceID', JSON.stringify(id));
    //         await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(() => {
        if (deviceId) {
            dispatch(fetchTasksAction({ deviceId }));
        }
    }, []);

    const onGetStartedPress = () => {
        navigation.navigate(RootNavigationNames.TODOS);
    };

    return (
        <SafeAreaView style={styles.root}>
            <LaunchSvg />
            <TextBlock title={title} paragraph={paragraph} />
            <AppButton onPress={onGetStartedPress} title={'Get started'} />
        </SafeAreaView>
    );
};
