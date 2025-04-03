import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login/LoginScreen';
import BottomNavigation from './BottomNavigation';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import ProductDetailsScreen from '../screens/ProductDetails/ProductDetailsScreen';

export type RootStackParamList = {
  Login: undefined;
  App: undefined;
  Categories: undefined;
  ProductDetails: {
    productId: number;
  };
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
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        initialParams={{productId: 0}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
