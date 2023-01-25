import React, { FC, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Category } from '~components/Category';
import { CustomTextInput } from '~components/CustomTextInput';
import { categories } from '~constants/Categories';
import { sortValues } from '~constants/SortValues';
import { theme } from '~constants/Theme';
import { useInput } from '~hooks/UseInput';
import { DrawerNavigationNames } from '~navigation/DrawerStack';
import { RootNavigationNames } from '~navigation/RootStack';
import { TodosScreenProps } from '~navigation/RootStack/type';
import { fetchTasksAction } from '~store/sagasActions/fetchTasks';
import { getTasks } from '~store/selectors/tasksSelector';
import { setTasksFilter, todayDate } from '~utils/getProperTime';
import { getTasksAmount, getTasksAmountWithSearch } from '~utils/getTasksAmount';

import { styles } from './style';

export const TodosScreen: FC<TodosScreenProps> = ({ navigation }) => {
    const [filter, setFilter] = useState('Today');

    const userSearchValue = useInput('');
    const tasks = useSelector(getTasks);

    const onCategoryPress = (title: string) => {
        userSearchValue.resetValue();
        navigation.navigate(RootNavigationNames.TASKS, {
            screen: DrawerNavigationNames.DAILY_TASKS,
            params: { title: title },
        });
    };

    const onChooseFilterPress = (value: string) => () => {
        setFilter(value);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasksAction());
    }, []);

    return (
        <SafeAreaView style={styles.root}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}> {tasks.length ? setTasksFilter(filter, tasks) : 'Add tasks'}</Text>
                <Text style={styles.date}>{todayDate}</Text>
            </View>
            <CustomTextInput {...userSearchValue} placeholder={'Search tasks'} />

            <View style={styles.sortValuesContainer}>
                {sortValues.map((item) => (
                    <TouchableOpacity
                        style={[
                            styles.sortValueContainer,
                            {
                                backgroundColor:
                                    filter === item ? theme.backgroundColor.green_and_blue : theme.color.white,
                            },
                        ]}
                        key={item}
                        onPress={onChooseFilterPress(item)}
                    >
                        <Text
                            style={[
                                styles.sortValueText,
                                { color: filter === item ? theme.color.white : theme.color.light_grey },
                            ]}
                        >
                            {item}
                        </Text>
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
                                counter={
                                    userSearchValue.value
                                        ? getTasksAmountWithSearch(tasks, item.title, userSearchValue.value)
                                        : getTasksAmount(tasks, item.title)
                                }
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
