import React from 'react';
import {render} from '@testing-library/react-native';
import HomeHeader from '../../src/components/HomeHeader/HomeHeader';

test('display header', async () => {
  const {getByTestId} = render(<HomeHeader />);

  const image = getByTestId('home-header-image');
  const greeting = getByTestId('home-header-greeting');
  const welcome = getByTestId('home-header-welcome');

  expect(image).toBeTruthy();
  expect(greeting).toHaveTextContent('Hi 👋');
  expect(welcome).toHaveTextContent('Welcome, Deluxan');
});
