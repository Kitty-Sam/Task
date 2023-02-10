import { useState } from 'react';

import { UseDatePickerResponseType } from '~hooks/UseDatePicker/type';

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
