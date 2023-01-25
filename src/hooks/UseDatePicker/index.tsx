import { useState } from 'react';

export type UseDatePickerResponseType = {
    booleanValue: boolean;
    onConfirm: (value: Date) => void;
    onCancel: () => void;
    dateValue: Date;
    setIsOpen: () => void;
};

export const useDatePicker = (initBooleanValue: boolean, initDateValue: Date): UseDatePickerResponseType => {
    const [booleanValue, setBooleanValue] = useState(initBooleanValue);
    const [dateValue, setDateValue] = useState(initDateValue);

    return {
        booleanValue,
        onConfirm: (dateValue: Date) => {
            setBooleanValue(initBooleanValue);
            setDateValue(dateValue);
        },
        onCancel: () => setBooleanValue(initBooleanValue),
        dateValue,
        setIsOpen: () => setBooleanValue(true),
    };
};
