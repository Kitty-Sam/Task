import React, { useCallback, useEffect } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { TaskContainerSquare } from '~components/TaskContainerSquare';
import { styles } from '~screens/DoneTasksScreen/style';
import { TaskType } from '~store/reducers/tasksReducer';
import { fetchTasksAction } from '~store/sagasActions/actions/fetchTasks';
import { getTasks } from '~store/selectors/tasksSelector';

export const DoneTasksScreen = () => {
    const tasks = useSelector(getTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasksAction());
    }, []);

    const filteredTasks = tasks.filter((task: TaskType) => task.isDone);

    const renderItem = useCallback(
        ({ item }: { item: TaskType }) => <TaskContainerSquare task={item} />,
        [filteredTasks],
    );

    return (
        <SafeAreaView style={styles.root}>
            {!filteredTasks.length ? (
                <Text style={styles.text}>Your done tasks will be here soon!</Text>
            ) : (
                <View style={styles.listContainer}>
                    <FlatList
                        contentContainerStyle={styles.contentContainer}
                        keyExtractor={(item: TaskType) => item.taskId}
                        data={filteredTasks}
                        numColumns={2}
                        renderItem={renderItem}
                        columnWrapperStyle={styles.columnWrapper}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};
