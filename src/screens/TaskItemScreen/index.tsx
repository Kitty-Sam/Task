import React, { FC, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { Gap } from '~components/Gap';
import { TaskScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/TaskItemScreen/style';
import { getFromFB, getFromFBDay } from '~utils/getProperTime';

export const TaskItemScreen: FC<TaskScreenProps> = ({ navigation, route }) => {
    const { task } = route.params;

    useEffect(() => {
        navigation.setOptions({ headerTitle: task.title.slice(0, 20) });
    }, []);

    return (
        <ScrollView style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={[styles.boldText, { flexWrap: 'wrap', width: '90%' }]}>{task.title}</Text>
                <Text style={styles.boldText}>{task.chapter}</Text>
            </View>

            <Text>
                {getFromFB(task.time.from)} - {getFromFB(task.time.till)}
            </Text>
            <Text>{getFromFBDay(task.time.from)}</Text>
            <Gap size={4} />

            <Text style={styles.boldText}>Description</Text>
            <Text>{task.description}</Text>
            <Gap size={4} />

            <Text style={styles.boldText}>Additional Description</Text>
            <Text>{task.description}</Text>
        </ScrollView>
    );
};
