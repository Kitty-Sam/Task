import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

import { Divider } from '~components/Divider';
import { ModalTemplate } from '~components/ModalTemplate';
import { TaskContainer } from '~components/TaskContainer';
import { DailyTasksScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/DailyTasksScreen/style';
import { TaskType } from '~store/reducers/tasksReducer';
import { getTasks } from '~store/selectors/tasksSelector';
import { getDoneTasksAmount } from '~utils/getTasksAmount';

export const DailyTasksScreen: FC<DailyTasksScreenProps> = ({ route }) => {
    const [isOpen, setIsOpen] = useState(false);
    const tasks = useSelector(getTasks);

    // @ts-ignore
    const { title } = route.params;
    const filteredTasks = tasks.filter((task: TaskType) => task.chapter === title);

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
