import React, { FC } from 'react';
import DatePicker from 'react-native-date-picker';

import { theme } from '~constants/Theme';

export interface DatePickerTemplateType {
    booleanValue: boolean;
    onConfirm: (value: Date) => void;
    onCancel: () => void;
    dateValue: Date;
    setIsOpen: (value: boolean) => void;
}

export const DatePickerTemplate: FC<DatePickerTemplateType> = ({ booleanValue, onCancel, onConfirm, dateValue }) => {
    return (
        <DatePicker
            textColor={theme.color.black}
            modal
            mode="datetime"
            open={booleanValue}
            date={dateValue}
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    );
};
