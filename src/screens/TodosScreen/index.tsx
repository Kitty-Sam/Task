import React, { FC, useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Category } from '~components/Category';
import { Gap } from '~components/Gap';
import { categories } from '~constants/Categories';
import { date } from '~constants/Date';
import { sortValues } from '~constants/SortValues';
import { theme } from '~constants/Theme';
import { DrawerNavigationNames } from '~navigation/DrawerStack';
import { RootNavigationNames } from '~navigation/RootStack';
import { TodosScreenProps } from '~navigation/RootStack/type';

import { styles } from './style';

export const TodosScreen: FC<TodosScreenProps> = ({ navigation }) => {
    const [search, setSearch] = useState('');

    const onCategoryPress = (title: string) => {
        navigation.navigate(RootNavigationNames.TASKS, {
            screen: DrawerNavigationNames.DAILY_TASKS,
            params: { title: title },
        });
    };

    return (
        <SafeAreaView style={styles.root}>
            <Gap size={4} />
            <Text style={styles.title}>you have 5 tasks today!</Text>
            <Gap size={1} />
            <Text style={styles.date}>{date}</Text>
            <Gap size={2} />
            <View style={styles.inputContainer}>
                <Image source={require('../../../assets/search.png')} style={styles.searchImage} />
                <TextInput
                    placeholder={'Search tasks'}
                    value={search}
                    onChangeText={setSearch}
                    selectTextOnFocus={true}
                    style={styles.input}
                    placeholderTextColor={theme.color.light_grey}
                />
            </View>
            <Gap size={5} />
            <View style={styles.sortValuesContainer}>
                {sortValues.map((item) => (
                    <TouchableOpacity style={styles.sortValueContainer} key={item}>
                        <Text style={styles.sortValueText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Gap size={3} />
            <View style={styles.listContainer}>
                <FlatList
                    numColumns={3}
                    data={categories}
                    renderItem={({ item }) => (
                        <View style={styles.categoryWrapper}>
                            <Category
                                title={item.title}
                                counter={'3'}
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
