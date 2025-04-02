import React from 'react';
import {render} from '@testing-library/react-native';
import ErrorMessage from '../src/components/fields/ErrorMessage/ErrorMessage';

test('display error message', async () => {
  const {getByTestId} = render(
    <ErrorMessage error={{message: 'Error message', type: 'error'}} />,
  );

  const message = getByTestId('error-message');
  expect(message).toHaveTextContent('Error message');
});
