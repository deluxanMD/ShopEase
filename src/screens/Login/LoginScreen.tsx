import {Image, View} from 'react-native';
import React from 'react';

import styles from './LoginStyles';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import {useLoginForm} from '../../components/forms/LoginForm/LoginFormHook';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigations/StackNavigation';

const LoginScreen = () => {
  const form = useLoginForm();
  const navigation = useNavigation<NavigationProp>();

  const login = async () => {};

  const navigateToApp = () => {
    navigation.navigate('App');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.formContainer}>
        <LoginForm control={form.control} />
        <View style={styles.loginBtn}>
          <CustomButton
            title="Login"
            onPress={form.handleSubmit(login)}
            testID="login-button"
          />
        </View>
      </View>
      <View style={styles.goToAppBtn}>
        <CustomButton
          title="Goto App"
          onPress={navigateToApp}
          testID="goto-button"
        />
      </View>
    </View>
  );
};

export default LoginScreen;
