import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { Divider } from '~components/Divider';
import { ModalTemplate } from '~components/ModalTemplate';
import { TaskContainer } from '~components/TaskContainer';
import { theme } from '~constants/Theme';
import { DailyTasksScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/DailyTasksScreen/style';
import { TaskType } from '~store/reducers/tasksReducer';
import { getTasks } from '~store/selectors/tasksSelector';
import { getDoneTasksAmount } from '~utils/getTasksAmount';

export const DailyTasksScreen: FC<DailyTasksScreenProps> = ({ navigation, route }) => {
    const [isOpen, setIsOpen] = useState(false);
    const tasks = useSelector(getTasks);

    // @ts-ignore
    const { title } = route.params;

    const isOpenModalPress = () => {
        setIsOpen(true);
    };

    return (
        <>
            <SafeAreaView style={styles.root}>
                <Text
                    onPress={() => navigation.goBack()}
                    style={{ color: theme.color.blue, position: 'absolute', left: 18, top: 18 }}
                >
                    Back
                </Text>

                <Text>{title} tasks</Text>

                <FlatList
                    data={tasks.filter((task: TaskType) => task.chapter === title)}
                    renderItem={({ item }: { item: TaskType }) => <TaskContainer task={item} />}
                />
                <Divider />
                <Text>done task ( {getDoneTasksAmount(tasks)} )</Text>

                <TouchableOpacity onPress={isOpenModalPress} style={styles.addIcon}>
                    <Text style={styles.addIconText}>+</Text>
                </TouchableOpacity>
            </SafeAreaView>
            {isOpen ? <ModalTemplate isOpen={isOpen} setIsOpen={setIsOpen} chapter={title} /> : <></>}
        </>
    );
};
