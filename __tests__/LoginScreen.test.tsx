import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import LoginScreen from '../src/screens/Login/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();

test('login button', async () => {
  const {getByTestId, getAllByTestId} = render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>,
  );

  const loginButton = getByTestId('login-button');
  expect(loginButton).toBeTruthy();

  fireEvent.press(loginButton);

  await waitFor(() => {
    const errorMessages = getAllByTestId('error-message');
    expect(errorMessages).toHaveLength(2);
    expect(errorMessages[0].props.children).toBe('Please enter your username');
    expect(errorMessages[1].props.children).toBe('Please enter your password');
  });
});

test('goto button', async () => {
  const {getByTestId} = render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="App" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>,
  );

  const gotoButton = getByTestId('goto-button');
  expect(gotoButton).toBeTruthy();

  fireEvent.press(gotoButton);

  await waitFor(() => {
    expect(getByTestId('HomeScreen')).toBeTruthy();
  });
});
