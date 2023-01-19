import React, { FC, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Category } from '~components/Category';
import { CustomTextInput } from '~components/CustomTextInput';
import { categories } from '~constants/Categories';
import { date } from '~constants/Date';
import { sortValues } from '~constants/SortValues';
import { useInput } from '~hooks/UseInput';
import { DrawerNavigationNames } from '~navigation/DrawerStack';
import { RootNavigationNames } from '~navigation/RootStack';
import { TodosScreenProps } from '~navigation/RootStack/type';
import { fetchTasksAction } from '~store/sagasActions/fetchTasks';
import { getTasks } from '~store/selectors/tasksSelector';
import { getTasksAmount } from '~utils/getTasksAmount';

import { styles } from './style';

export const TodosScreen: FC<TodosScreenProps> = ({ navigation }) => {
    const userSearchValue = useInput('');
    const tasks = useSelector(getTasks);

    const onCategoryPress = (title: string) => {
        navigation.navigate(RootNavigationNames.TASKS, {
            screen: DrawerNavigationNames.DAILY_TASKS,
            params: { title: title },
        });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasksAction());
    }, []);

    return (
        <SafeAreaView style={styles.root}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>you have 5 tasks today!</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <CustomTextInput {...userSearchValue} placeholder={'Search tasks'} />

            <View style={styles.sortValuesContainer}>
                {sortValues.map((item) => (
                    <TouchableOpacity style={styles.sortValueContainer} key={item}>
                        <Text style={styles.sortValueText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    numColumns={3}
                    data={categories}
                    renderItem={({ item }) => (
                        <View style={styles.categoryWrapper}>
                            <Category
                                title={item.title}
                                counter={getTasksAmount(tasks, item.title)}
                                icon={item.icon}
                                style={item.style}
                                backgroundColor={item.backgroundColor}
                                onPress={() => onCategoryPress(item.title)}
                            />
                        </View>
                    )}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>
        </SafeAreaView>
    );
};
