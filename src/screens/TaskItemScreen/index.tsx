import React, { FC, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Gap } from '~components/Gap';
import { TaskScreenProps } from '~navigation/RootStack/type';
import { styles } from '~screens/TaskItemScreen/style';
import { getFromFB, getFromFBDay } from '~utils/getProperTime';
import { getShortString } from '~utils/getShortString';

export const TaskItemScreen: FC<TaskScreenProps> = ({ navigation, route }) => {
    const { task } = route.params;

    useEffect(() => {
        navigation.setOptions({ headerTitle: getShortString(task.title, 15) });
    }, []);

    return (
        <ScrollView style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.boldText}>{task.chapter}</Text>
            </View>
            <Text style={[styles.boldText, styles.extraTitleText]}>{task.title}</Text>

            <Text>
                {getFromFB(task.time.from)} - {getFromFB(task.time.till)}
            </Text>
            <Text>{getFromFBDay(task.time.from)}</Text>
            <Gap size={4} />

            <Text style={styles.boldText}>Description</Text>
            <Text>{task.description}</Text>
            <Gap size={4} />

            <Text style={styles.boldText}>Additional Description</Text>
            <Text>{task.extraInfo}</Text>
        </ScrollView>
    );
};
