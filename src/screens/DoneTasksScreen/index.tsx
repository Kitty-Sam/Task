import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { TaskContainerSquare } from '~components/TaskContainerSquare';
import { styles } from '~screens/DoneTasksScreen/style';
import { TaskType } from '~store/reducers/tasksReducer';
import { getTasks } from '~store/selectors/tasksSelector';

export const DoneTasksScreen = () => {
    const tasks = useSelector(getTasks);
    const filteredTasks = tasks.filter((task: TaskType) => task.isDone);

    return (
        <SafeAreaView style={styles.root}>
            {!filteredTasks.length ? (
                <Text>Your done tasks will be here soon!</Text>
            ) : (
                <View style={styles.listContainer}>
                    <FlatList
                        keyExtractor={(item) => item.taskId}
                        data={filteredTasks}
                        numColumns={2}
                        renderItem={({ item }: { item: TaskType }) => <TaskContainerSquare task={item} />}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};
