import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login/LoginScreen';
import BottomNavigation from './BottomNavigation';

type RootStackParamList = {
  Login: undefined;
  App: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StackNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
