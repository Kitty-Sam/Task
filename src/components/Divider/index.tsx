import React from 'react';
import { View } from 'react-native';

import { theme } from '~constants/Theme';

export const Divider = () => {
    return (
        <View
            style={{
                borderBottomColor: theme.color.black,
                borderBottomWidth: theme.borderWidth['1'],
                alignSelf: 'stretch',
                marginHorizontal: theme.marginHorizontal['16'],
            }}
        />
    );
};
