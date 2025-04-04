import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login/LoginScreen';
import BottomNavigation from './BottomNavigation';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import ProductDetailsScreen from '../screens/ProductDetails/ProductDetailsScreen';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import OrderPlacedScreen from '../screens/OrderPlaced/OrderPlacedScreen';
import CategoriesGrid from '../components/CategoriesGrid/CategoriesGrid';

export type RootStackParamList = {
  Login: undefined;
  App: undefined;
  Categories: undefined;
  ProductDetails: {
    productId: number;
  };
  Checkout: undefined;
  PlaceOrder: undefined;
  CategoriesGrid: {
    category: string;
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
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="PlaceOrder" component={OrderPlacedScreen} />
      <Stack.Screen name="CategoriesGrid" component={CategoriesGrid} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
