import React from 'react';
import TextField from '../../fields/TextField/TextField';
import {Control} from 'react-hook-form';

interface Props {
  control: Control<any>;
}

const LoginForm = ({control}: Props) => {
  return (
    <>
      <TextField
        name="username"
        control={control}
        placeholder="Username, Email or Phone number"
      />
      <TextField
        name="password"
        control={control}
        placeholder="Password"
        secureTextEntry
      />
    </>
  );
};

export default LoginForm;
