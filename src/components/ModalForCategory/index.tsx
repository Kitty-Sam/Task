import React, { FC } from 'react';
import { Modal, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppButtonWithoutBackGround } from '~components/AppButtonWithoutBackGround';
import { CustomTextInput } from '~components/CustomTextInput';
import { styles } from '~components/ModalForCategory/styles';
import { ModalForCategoryType } from '~components/ModalForCategory/type';
import { theme } from '~constants/Theme';
import { addCategoryAction } from '~store/sagasActions/addCategory';

export const ModalForCategory: FC<ModalForCategoryType> = ({ isOpen, setIsOpen, userCategory, userColor, catId }) => {
    const dispatch = useDispatch();

    const saveCategoryPress = () => {
        dispatch(
            addCategoryAction({
                catId: catId,
                title: userCategory.value,
                icon: 'music',
                backgroundColor: userColor.value,
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
                        <CustomTextInput {...userColor} placeholder="add color" />

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
