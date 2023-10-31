import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Home/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
