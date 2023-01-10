import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {TestScreen} from './src/screens/TestScreen';

export const App = () => {
  return (
    <SafeAreaView>
      <Text>hello</Text>
      <TestScreen />
    </SafeAreaView>
  );
};
