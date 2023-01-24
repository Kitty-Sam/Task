import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { TaskContainer } from '~components/TaskContainer';
import { styles } from '~screens/DoneTasksScreen/style';
import { TaskType } from '~store/reducers/tasksReducer';
import { getTasks } from '~store/selectors/tasksSelector';

export const DoneTasksScreen = () => {
    const tasks = useSelector(getTasks);
    const filteredTasks = tasks.filter((task: TaskType) => task.isDone);

    return (
        <SafeAreaView style={styles.root}>
            {!filteredTasks.length ? (
                <Text> Your done tasks will be here soon!</Text>
            ) : (
                <FlatList
                    keyExtractor={(item) => item.taskId}
                    data={filteredTasks}
                    renderItem={({ item }: { item: TaskType }) => <TaskContainer task={item} />}
                />
            )}
        </SafeAreaView>
    );
};
