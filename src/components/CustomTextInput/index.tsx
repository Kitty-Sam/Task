import React, { FC } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback } from 'react-native';

import { styles } from '~components/CustomTextInput/style';
import { CustomTextInputType } from '~components/CustomTextInput/type';

export const CustomTextInput: FC<CustomTextInputType> = ({ value, onChangeText, placeholder }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.textInputContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <TextInput
                    value={value.toLowerCase()}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    style={styles.textInput}
                    placeholderTextColor={'grey'}
                />
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
