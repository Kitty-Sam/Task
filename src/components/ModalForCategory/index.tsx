import React, { FC } from 'react';
import { Modal, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppButtonWithoutBackGround } from '~components/AppButton';
import { CustomTextInput } from '~components/CustomTextInput';
import { DropDownPickerTemplate } from '~components/DropDownPickerTemplate';
import { styles } from '~components/ModalForCategory/styles';
import { ModalForCategoryType } from '~components/ModalForCategory/type';
import { colors, icons } from '~constants/Colors';
import { theme } from '~constants/Theme';
import { useDropDownPicker } from '~hooks/UseDropDownPicker';
import { addCategoryAction } from '~store/sagasActions/actions/addCategory';

export const ModalForCategory: FC<ModalForCategoryType> = ({ isOpen, setIsOpen, userCategory, userColor, catId }) => {
    const dispatch = useDispatch();

    const colorDrop = useDropDownPicker(false, null, colors);

    const iconDrop = useDropDownPicker(false, null, icons);

    const saveCategoryPress = () => {
        dispatch(
            addCategoryAction({
                catId: catId,
                title: userCategory.value,
                icon: iconDrop.value!,
                backgroundColor: colorDrop.value!,
            }),
        );

        setIsOpen(false);
        userCategory.resetValue();
    };

    const onCancelPress = () => {
        setIsOpen(false);
    };

    return (
        <View style={styles.modalWrapper}>
            <Modal
                animationType="fade"
                visible={isOpen}
                onRequestClose={() => {
                    setIsOpen(!isOpen);
                }}
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text>Create your own category</Text>
                        <CustomTextInput {...userCategory} placeholder="add category title" />

                        <DropDownPickerTemplate {...colorDrop} title="color" zIndex={3000} zIndexInverse={1000} />
                        <DropDownPickerTemplate {...iconDrop} title="icon" zIndex={2000} zIndexInverse={2000} />

                        <View style={styles.buttonsContainer}>
                            <AppButtonWithoutBackGround onPress={saveCategoryPress} title="save" />
                            <AppButtonWithoutBackGround
                                onPress={onCancelPress}
                                title="cancel"
                                color={theme.color.pink}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
