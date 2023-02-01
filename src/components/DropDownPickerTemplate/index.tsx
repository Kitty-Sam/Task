import DropDownPicker from 'react-native-dropdown-picker';

import { styles } from '~components/DropDownPickerTemplate/style';
import { theme } from '~constants/Theme';

export const DropDownPickerTemplate = ({
    open,
    setOpen,
    items,
    value,
    setValue,
    setItems,
    title,
    zIndex,
    zIndexInverse,
}: any) => {
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={`select ${title}`}
            zIndex={zIndex}
            zIndexInverse={zIndexInverse}
            style={styles.dropDown}
            placeholderStyle={{
                color: theme.color.light_grey,
            }}
        />
    );
};
