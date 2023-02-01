import { useIsFocused } from '@react-navigation/native';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import { Category } from '~components/Category';
import { CustomTextInput } from '~components/CustomTextInput';
import { ModalForCategory } from '~components/ModalForCategory';
import { sortValues } from '~constants/SortValues';
import { theme } from '~constants/Theme';
import { useInput } from '~hooks/UseInput';
import { DrawerNavigationNames } from '~navigation/DrawerStack';
import { RootNavigationNames } from '~navigation/RootStack';
import { TodosScreenProps } from '~navigation/RootStack/type';
import { RequestStatus } from '~store/reducers/appReducer';
import { CategoryType } from '~store/reducers/categoriesReducer';
import { fetchCategoriesAction } from '~store/sagasActions/fetchCategories';
import { fetchTasksAction } from '~store/sagasActions/fetchTasks';
import { getAppStatus } from '~store/selectors/appSelector';
import { getCategories } from '~store/selectors/categoriesSelector';
import { getTasks } from '~store/selectors/tasksSelector';
import { setTasksFilter, todayDate } from '~utils/getProperTime';
import { getTasksAmount, getTasksAmountWithSearch } from '~utils/getTasksAmount';

import { styles } from './style';

export const TodosScreen: FC<TodosScreenProps> = memo(({ navigation }) => {
    const [filter, setFilter] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const userSearchValue = useInput('');
    const tasks = useSelector(getTasks);
    const categories = useSelector(getCategories);
    const appStatus = useSelector(getAppStatus);

    const userCategory = useInput('');
    const userColor = useInput('violet');

    const isFocused = useIsFocused();

    const dispatch = useDispatch();

    const onCategoryPress = (title: string) => () => {
        if (title === 'Add') {
            setIsOpen(true);
            return;
        }

        userSearchValue.resetValue();
        navigation.navigate(RootNavigationNames.TASKS, {
            screen: DrawerNavigationNames.DAILY_TASKS,
            params: { title: title, filter: filter, search: userSearchValue.value.toLowerCase() },
        });
    };

    const onChooseFilterPress = (value: string) => () => {
        setFilter(value);
    };

    const onRefreshPress = () => {
        setFilter('');
    };

    useEffect(() => {
        if (isFocused) {
            dispatch(fetchTasksAction());
            dispatch(fetchCategoriesAction());
        }
    }, [isFocused]);

    const renderItem = useCallback(
        ({ item, index }: any) => (
            <View style={styles.categoryWrapper}>
                <Category
                    testID={`listItem.${index + 1}`}
                    title={item.title}
                    counter={
                        userSearchValue.value
                            ? getTasksAmountWithSearch(tasks, item.title, userSearchValue.value)
                            : getTasksAmount(tasks, item.title)
                    }
                    icon={item.icon}
                    backgroundColor={
                        userSearchValue.value &&
                        !Number(getTasksAmountWithSearch(tasks, item.title, userSearchValue.value))
                            ? theme.color.black
                            : item.backgroundColor
                    }
                    onPress={onCategoryPress(item.title)}
                />
            </View>
        ),
        [categories, userSearchValue.value, tasks],
    );

    const keyExtractor = (item: CategoryType) => item.title;

    return (
        <SafeAreaView style={styles.root}>
            {appStatus === RequestStatus.LOADING ? (
                <ActivityIndicator />
            ) : (
                <>
                    <View style={styles.titleContainer}>
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
                        <Icon name="refresh" size={18} onPress={onRefreshPress} />
                    </View>
                    {isOpen ? (
                        <ModalForCategory
                            userCategory={userCategory}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            catId={Date.now().toString()}
                            userColor={userColor}
                        />
                    ) : (
                        <></>
                    )}
                    <View style={styles.listContainer}>
                        <FlatList
                            numColumns={3}
                            data={categories}
                            contentContainerStyle={styles.contentContainer}
                            keyExtractor={keyExtractor}
                            renderItem={renderItem}
                            columnWrapperStyle={styles.columnWrapper}
                        />
                    </View>
                </>
            )}
        </SafeAreaView>
    );
});
