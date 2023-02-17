import React, { FC, useCallback, useEffect, useRef } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback } from 'react-native';

import { styles } from '~components/CustomTextInput/style';
import { CustomTextInputType } from '~components/CustomTextInput/type';

const trigger = 500;
export const CustomTextInputWithSetTimeOut: FC<CustomTextInputType> = ({
    value,
    onChangeText,
    placeholder,
    testID,
}) => {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const input = useRef<any>(null);

    useEffect(() => {
        if (value !== '' && input.current) {
            input.current.value = String(value);
        }
    }, [value]);

    const onChange = useCallback(
        (text: string) => {
            timer.current && clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                onChangeText(text.toLowerCase());
            }, trigger);
        },
        [onChangeText],
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.textInputContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <TextInput
                    ref={input}
                    testID={testID}
                    onChangeText={onChange}
                    placeholder={placeholder}
                    style={styles.textInput}
                    placeholderTextColor={'grey'}
                />
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
