import React, {FC} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

export interface CustomButtonPropsType {
  title: string;
}
const CustomButton: FC<CustomButtonPropsType> = ({title}) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export const TestScreen = () => {
  return (
    <SafeAreaView>
      <Text>Test Screen</Text>
      <CustomButton title={'press me if you want'} />
    </SafeAreaView>
  );
};
