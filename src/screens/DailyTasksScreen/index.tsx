import { useIsFocused } from '@react-navigation/native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Divider } from '~components/Divider';
import { ModalTemplate } from '~components/ModalTemplate';
import { TaskContainer } from '~components/TaskContainer';
import { DailyTasksScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/DailyTasksScreen/style';
import { RequestStatus } from '~store/reducers/appReducer';
import { ITask } from '~store/reducers/types';
import { filterTasksAction } from '~store/sagasActions/actions/filterTasks';
import { getAppStatus } from '~store/selectors/appSelector';
import { getCurrentTasks } from '~store/selectors/tasksSelector';
import { getDoneTasksAmount } from '~utils/getTasksAmount';

export const DailyTasksScreen: FC<DailyTasksScreenProps> = ({ route: { params } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [trashVisibleId, setTrashVisibleId] = useState<string | null>(null);

    const currentTasks = useSelector(getCurrentTasks, shallowEqual);
    const appStatus = useSelector(getAppStatus, shallowEqual);

    const isFocused = useIsFocused();

    const { title, filter, search } = params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterTasksAction({ searchValue: search, chapter: title, period: filter }));
    }, [isFocused, search, title, filter]);

    const isOpenModalPress = () => {
        setIsOpen(true);
    };

    const updateTrashVisibility = (itemId: string) => {
        setTrashVisibleId(itemId);
    };

    const renderItem = useCallback(
        ({ item }: { item: ITask }) => (
            <TaskContainer task={item} updateTrashVisibility={updateTrashVisibility} trashId={trashVisibleId} />
        ),
        [currentTasks],
    );

    return (
        <>
            <SafeAreaView style={styles.root}>
                {appStatus === RequestStatus.LOADING ? (
                    <ActivityIndicator style={styles.activityIndicator} />
                ) : (
                    <>
                        <Text style={styles.headerText}>{title}</Text>
                        <View style={styles.viewContainer} />
                        {!currentTasks.length ? (
                            <Text style={styles.addText}>Just add your task</Text>
                        ) : (
                            <>
                                <FlatList
                                    keyExtractor={(item) => item.taskId}
                                    data={currentTasks}
                                    renderItem={renderItem}
                                />

                                <Divider />
                                <Text>done task ( {getDoneTasksAmount(currentTasks, title)} )</Text>
                            </>
                        )}
                        <TouchableOpacity onPress={isOpenModalPress} style={styles.addIcon}>
                            <Icon name="plus" size={24} style={styles.addIconText} />
                        </TouchableOpacity>
                    </>
                )}
            </SafeAreaView>
            {isOpen && <ModalTemplate isOpen={isOpen} setIsOpen={setIsOpen} chapter={title} />}
        </>
    );
};
