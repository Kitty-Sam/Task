import { useIsFocused } from '@react-navigation/native';
import React, { FC, memo, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Platform, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import { Divider } from '~components/Divider';
import { Gap } from '~components/Gap';
import { ModalTemplate } from '~components/ModalTemplate';
import { TaskContainer } from '~components/TaskContainer';
import { DailyTasksScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/DailyTasksScreen/style';
import { RequestStatus } from '~store/reducers/appReducer';
import { TaskType } from '~store/reducers/tasksReducer';
import { filterTasksAction } from '~store/sagasActions/filterTasks';
import { getAppStatus } from '~store/selectors/appSelector';
import { getTasks } from '~store/selectors/tasksSelector';
import { getDoneTasksAmount } from '~utils/getTasksAmount';

export const DailyTasksScreen: FC<DailyTasksScreenProps> = memo(({ route }) => {
    const [isOpen, setIsOpen] = useState(false);
    const tasks = useSelector(getTasks);
    const appStatus = useSelector(getAppStatus);
    const [trashVisibleId, setTrashVisibleId] = useState<string | null>(null);
    const isFocused = useIsFocused();

    const { title, filter, search } = route.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterTasksAction({ searchValue: search, chapter: title, period: filter }));
    }, [isFocused, filter, search, title]);

    const isOpenModalPress = () => {
        setIsOpen(true);
    };

    const updateTrashVisibility = (itemId: string) => {
        setTrashVisibleId(itemId);
    };

    return (
        <>
            <SafeAreaView style={styles.root}>
                {appStatus === RequestStatus.LOADING ? (
                    <ActivityIndicator style={styles.activityIndicator} />
                ) : (
                    <>
                        <Text style={styles.headerText}>{title}</Text>
                        {Platform.OS === 'android' && <Gap size={3} />}
                        {!tasks.length ? (
                            <Text style={styles.addText}>Just add your task</Text>
                        ) : (
                            <>
                                <FlatList
                                    keyExtractor={(item) => item.taskId}
                                    data={tasks}
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
                    </>
                )}
            </SafeAreaView>
            {isOpen ? <ModalTemplate isOpen={isOpen} setIsOpen={setIsOpen} chapter={title} /> : <></>}
        </>
    );
});
