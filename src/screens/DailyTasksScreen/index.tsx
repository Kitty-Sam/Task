import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

import { Divider } from '~components/Divider';
import { Gap } from '~components/Gap';
import { ModalTemplate } from '~components/ModalTemplate';
import { TaskContainer } from '~components/TaskContainer';
import { DailyTasksScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/DailyTasksScreen/style';
import { TaskType } from '~store/reducers/tasksReducer';
import { getTasks } from '~store/selectors/tasksSelector';
import {
    getDoneTasksAmount,
    getTasksWithPeriod,
    getTasksWithSearch,
    getTasksWithSearchAndPeriod,
} from '~utils/getTasksAmount';

export const DailyTasksScreen: FC<DailyTasksScreenProps> = ({ route }) => {
    const [isOpen, setIsOpen] = useState(false);
    const tasks = useSelector(getTasks);

    // @ts-ignore
    const { title, filter, search } = route.params;

    let filteredTasks;

    if (!search && !filter) {
        filteredTasks = tasks.filter((task: TaskType) => task.chapter === title);
    } else if (!search) {
        filteredTasks = getTasksWithPeriod(tasks, title, filter);
    } else if (!filter) {
        filteredTasks = getTasksWithSearch(tasks, title, search);
    } else {
        filteredTasks = getTasksWithSearchAndPeriod(tasks, title, search, filter);
    }

    const isOpenModalPress = () => {
        setIsOpen(true);
    };

    const [trashVisibleId, setTrashVisibleId] = useState<string | null>(null);

    const updateTrashVisibility = (itemId: string) => {
        setTrashVisibleId(itemId);
    };

    return (
        <>
            <SafeAreaView style={styles.root}>
                <Text style={styles.headerText}>{title}</Text>
                <Gap size={1} />
                {!filteredTasks.length ? (
                    <Text style={styles.addText}>Just add your task</Text>
                ) : (
                    <>
                        <FlatList
                            keyExtractor={(item) => item.taskId}
                            data={filteredTasks}
                            renderItem={({ item }: { item: TaskType }) => (
                                <TaskContainer
                                    task={item}
                                    updateTrashVisibility={updateTrashVisibility}
                                    trashId={trashVisibleId}
                                />
                            )}
                        />

                        <Divider />
                        <Text>done task ( {getDoneTasksAmount(tasks, title)} )</Text>
                    </>
                )}
                <TouchableOpacity onPress={isOpenModalPress} style={styles.addIcon}>
                    <Icon name="plus" size={24} style={styles.addIconText} />
                </TouchableOpacity>
            </SafeAreaView>
            {isOpen ? <ModalTemplate isOpen={isOpen} setIsOpen={setIsOpen} chapter={title} /> : <></>}
        </>
    );
};
