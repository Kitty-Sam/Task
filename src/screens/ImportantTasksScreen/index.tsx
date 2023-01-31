import React, { useCallback, useEffect } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { TaskContainerSquare } from '~components/TaskContainerSquare';
import { styles } from '~screens/DoneTasksScreen/style';
import { TaskType } from '~store/reducers/tasksReducer';
import { fetchTasksAction } from '~store/sagasActions/fetchTasks';
import { getTasks } from '~store/selectors/tasksSelector';

export const ImportantTasksScreen = () => {
    const tasks = useSelector(getTasks);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasksAction());
    }, []);

    const filteredTasks = tasks.filter((task: TaskType) => task.isImportant);

    const renderItem = useCallback(
        ({ item }: { item: TaskType }) => <TaskContainerSquare task={item} />,
        [filteredTasks],
    );
    const keyExtractor = (item: TaskType) => item.taskId;

    return (
        <SafeAreaView style={styles.root}>
            {!filteredTasks.length ? (
                <Text style={styles.text}> Your important tasks will be here soon!</Text>
            ) : (
                <View style={styles.listContainer}>
                    <FlatList
                        contentContainerStyle={styles.contentContainer}
                        keyExtractor={keyExtractor}
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
