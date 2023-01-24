import React, { FC } from 'react';
import DatePicker from 'react-native-date-picker';

import { DatePickerTemplateType } from '~components/DatePickerTemplate/type';
import { theme } from '~constants/Theme';

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
