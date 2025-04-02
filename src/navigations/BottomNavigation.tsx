/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';

import HomeScreen from '../screens/Home/HomeScreen';
import CartScreen from '../screens/Cart/CartScreen';
import {colors} from '../utils/colors';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faHome}
              size={24}
              color={focused ? colors.primary : colors.lightGray}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faCartShopping}
              size={24}
              color={focused ? colors.primary : colors.lightGray}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
