import { ItemType } from 'react-native-dropdown-picker';

import { ValueType } from '~hooks/UseDropDownPicker';

export interface DropDownPickerTemplateType {
    open: boolean;
    setOpen: () => void;
    items: ItemType<ValueType>[];
    value: null | ItemType<ValueType> | ItemType<ValueType>[];
    setValue: () => void;
    setItems: () => void;
    title: string;
    zIndex: number;
    zIndexInverse: number;
}
