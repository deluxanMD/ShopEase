import {Button, View} from 'react-native';
import React, {useState} from 'react';

import styles from './LoginStyles';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import {useLoginForm} from '../../components/forms/LoginForm/LoginFormHook';
import {Text} from '@react-navigation/elements';

const LoginScreen = () => {
  const form = useLoginForm();
  const [value, setValue] = useState('initial');

  console.log('ddd');

  const login = async (data: any) => {
    setValue(data.username);
    console.log('login', data);
  };

  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <LoginForm control={form.control} />
      <Button title="Login" onPress={form.handleSubmit(login)} />
    </View>
  );
};

export default LoginScreen;
