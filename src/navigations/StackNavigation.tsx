import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login/LoginScreen';
import BottomNavigation from './BottomNavigation';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';

type RootStackParamList = {
  Login: undefined;
  App: undefined;
  Categories: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StackNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="App">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={BottomNavigation} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
