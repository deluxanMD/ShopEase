import {View, Text} from 'react-native';
import React from 'react';

import {FieldError} from 'react-hook-form';

import styles from './ErrorMessageStyles';

interface Props {
  error: FieldError;
}

const ErrorMessage = ({error}: Props) => {
  return (
    <View>
      <Text style={styles.message}>{error?.message}</Text>
    </View>
  );
};

export default ErrorMessage;
