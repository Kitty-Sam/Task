import React, { FC } from 'react';
import { TextInput } from 'react-native';

import { styles } from '~components/CustomTextInput/style';
import { CustomTextInputType } from '~components/CustomTextInput/type';

export const CustomTextInput: FC<CustomTextInputType> = ({ value, onChangeText, placeholder }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.textInputContainer}
            placeholderTextColor={'grey'}
        />
    );
};
