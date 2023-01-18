import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { Gap } from '~components/Gap';
import { ModalTemplate } from '~components/ModalTemplate';
import { TaskContainer } from '~components/TaskContainer';
import { theme } from '~constants/Theme';
import { styles } from '~screens/DailyTasksScreen/style';
import { TaskType } from '~store/reducers/tasksReducer';
import { getTasks } from '~store/selectors/tasksSelector';

export const DailyTasksScreen = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tasks = useSelector(getTasks);

    const route = useRoute<any>();
    const navigation = useNavigation<any>();

    const { title } = route.params;

    return (
        <SafeAreaView style={styles.root}>
            <Text onPress={() => navigation.goBack()} style={{ color: theme.color.blue }}>
                back
            </Text>
            {isOpen ? (
                <ModalTemplate isOpen={isOpen} setIsOpen={setIsOpen} chapter={title} />
            ) : (
                <>
                    <Text>{title} tasks</Text>
                    <Gap size={3} />
                    <FlatList
                        data={tasks.filter((task: TaskType) => task.chapter === title)}
                        renderItem={({ item }) => (
                            <TaskContainer
                                title={item.title}
                                id={item.taskId}
                                chapter={item.chapter}
                                time={item.time}
                                description={item.description}
                            />
                        )}
                    />
                    <Text>______________________</Text>
                    <TouchableOpacity onPress={() => setIsOpen(true)}>
                        <Text style={{ fontSize: 30 }}>+</Text>
                    </TouchableOpacity>
                </>
            )}
        </SafeAreaView>
    );
};
