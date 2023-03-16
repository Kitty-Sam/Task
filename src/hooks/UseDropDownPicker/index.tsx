import { useState } from 'react';

export type ValueType = {
    label: string;
    value: string;
    testID?: string;
};

export const useDropDownPicker = (isOpen: boolean, initValue: null, itemsValues: ValueType[]) => {
    const [open, setOpen] = useState(isOpen);
    const [value, setValue] = useState(initValue);
    const [items, setItems] = useState(itemsValues);

    return {
        open,
        value,
        items,
        setOpen,
        setValue,
        setItems,
    };
};
