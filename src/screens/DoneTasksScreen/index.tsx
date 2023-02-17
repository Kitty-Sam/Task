import React, { useCallback, useEffect } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { TaskContainerSquare } from '~components/TaskContainerSquare';
import { styles } from '~screens/DoneTasksScreen/style';
import { ITask } from '~store/reducers/types';
import { fetchTasksAction } from '~store/sagasActions/actions/fetchTasks';
import { getTasks } from '~store/selectors/tasksSelector';

export const DoneTasksScreen = () => {
    const tasks = useSelector(getTasks, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasksAction());
    }, []);

    const filteredTasks = tasks.filter((task: ITask) => task.isDone);

    const renderItem = useCallback(({ item }: { item: ITask }) => <TaskContainerSquare task={item} />, [filteredTasks]);

    return (
        <SafeAreaView style={styles.root}>
            {!filteredTasks.length ? (
                <Text style={styles.text}>Your done tasks will be here soon!</Text>
            ) : (
                <View style={styles.listContainer}>
                    <FlatList
                        contentContainerStyle={styles.contentContainer}
                        keyExtractor={(item: ITask) => item.taskId}
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
