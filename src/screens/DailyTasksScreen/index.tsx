import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { ModalTemplate } from '~components/ModalTemplate';
import { TaskContainer } from '~components/TaskContainer';
import { styles } from '~screens/DailyTasksScreen/style';
import { getDeviceId } from '~store/selectors/appSelector';
import { getTasks } from '~store/selectors/tasksSelector';

export const DailyTasksScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const deviceID = useSelector(getDeviceId);
    const tasks = useSelector(getTasks);

    const route = useRoute<any>();
    const { title } = route.params;

    return (
        <SafeAreaView style={styles.root}>
            {isOpen ? (
                <ModalTemplate isOpen={isOpen} setIsOpen={setIsOpen} chapter={title} deviceId={deviceID} />
            ) : (
                <>
                    <Text>{title} tasks</Text>
                    <FlatList data={tasks} renderItem={({ item }) => <TaskContainer title={item.title} />} />
                    <TouchableOpacity onPress={() => setIsOpen(true)}>
                        <Text style={{ fontSize: 30 }}>+</Text>
                    </TouchableOpacity>
                </>
            )}
        </SafeAreaView>
    );
};
