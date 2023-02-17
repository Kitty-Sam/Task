import React, { FC, useState } from 'react';
import { Modal, Text, View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import { useDispatch } from 'react-redux';

import { AppButtonWithoutBackGround } from '~components/AppButton';
import { CustomTextInput } from '~components/CustomTextInput';
import { DropDownPickerTemplate } from '~components/DropDownPickerTemplate';
import { styles } from '~components/ModalForCategory/styles';
import { ModalForCategoryType } from '~components/ModalForCategory/type';
import { icons } from '~constants/Colors';
import { theme } from '~constants/Theme';
import { useDropDownPicker } from '~hooks/UseDropDownPicker';
import { addCategoryAction } from '~store/sagasActions/actions/addCategory';

export const ModalForCategory: FC<ModalForCategoryType> = ({ isOpen, setIsOpen, userCategory, catId }) => {
    const dispatch = useDispatch();

    const iconDrop = useDropDownPicker(false, null, icons);

    const [currentColor, setCurrentColor] = useState('');
    const [isPressed, setIsPressed] = useState(false);

    const onColorChange = (color: string) => {
        setCurrentColor(color);
    };

    const saveCategoryPress = () => {
        dispatch(
            addCategoryAction({
                catId: catId,
                title: userCategory.value || 'test',
                icon: iconDrop.value! || 'music',
                backgroundColor: currentColor || 'blue',
            }),
        );

        setIsOpen(false);
        setIsPressed(false);
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
                        <CustomTextInput {...userCategory} placeholder="add category title" testID="CategoryTitle" />

                        {isPressed ? (
                            <View style={styles.colorPickerContainer}>
                                <ColorPicker
                                    color={currentColor}
                                    swatchesOnly={false}
                                    onColorChange={onColorChange}
                                    thumbSize={40}
                                    sliderSize={40}
                                    noSnap={true}
                                    row={false}
                                />
                            </View>
                        ) : !currentColor ? (
                            <AppButtonWithoutBackGround
                                onPress={() => setIsPressed(true)}
                                title={'open color picker'}
                            />
                        ) : (
                            <>
                                <Text>Current color:{currentColor}</Text>
                                <AppButtonWithoutBackGround
                                    onPress={() => setIsPressed(true)}
                                    title={'open color picker'}
                                />
                            </>
                        )}

                        <DropDownPickerTemplate
                            {...iconDrop}
                            title="icon"
                            zIndex={2000}
                            zIndexInverse={2000}
                            testID="CategoryIcon"
                        />

                        <View style={styles.buttonsContainer}>
                            <AppButtonWithoutBackGround
                                onPress={saveCategoryPress}
                                title="save"
                                testID="CategorySave"
                            />
                            <AppButtonWithoutBackGround
                                onPress={onCancelPress}
                                title="cancel"
                                color={theme.color.pink}
                                testID="CategoryCancel"
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
