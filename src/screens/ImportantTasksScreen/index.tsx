import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { TaskContainerSquare } from '~components/TaskContainerSquare';
import { styles } from '~screens/DoneTasksScreen/style';
import { TaskType } from '~store/reducers/tasksReducer';
import { getTasks } from '~store/selectors/tasksSelector';

export const ImportantTasksScreen = () => {
    const tasks = useSelector(getTasks);
    const filteredTasks = tasks.filter((task: TaskType) => task.isImportant);

    return (
        <SafeAreaView style={styles.root}>
            {!filteredTasks.length ? (
                <Text style={styles.text}> Your important tasks will be here soon!</Text>
            ) : (
                <View style={styles.listContainer}>
                    <FlatList
                        contentContainerStyle={styles.contentContainer}
                        keyExtractor={(item) => item.taskId}
                        data={filteredTasks}
                        numColumns={2}
                        renderItem={({ item }: { item: TaskType }) => <TaskContainerSquare task={item} />}
                        columnWrapperStyle={styles.columnWrapper}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};
