import {TextInputProps, TextInput} from 'react-native';
import React from 'react';

import {Control, Controller} from 'react-hook-form';

import styles from './TextFieldStyles';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

type Props = {
  name: string;
  control: Control<any>;
} & TextInputProps;

const TextField = ({name, control, ...rest}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: {onChange, onBlur, value, ...fieldRest},
        fieldState: {error},
      }) => (
        <>
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            {...fieldRest}
            {...rest}
          />
          {error && <ErrorMessage error={error} />}
        </>
      )}
    />
  );
};

export default TextField;
