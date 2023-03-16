import { useState } from 'react';

export type UseInputResponseType = {
    value: string;
    onChangeText: (text: string) => void;
    resetValue: () => void;
};

export const useInput = (initialValue: string): UseInputResponseType => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChangeText: (text: string) => setValue(text.toLowerCase()),
        resetValue: () => setValue(initialValue),
    };
};
