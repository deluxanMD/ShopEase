import {View, Dimensions, Text} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';

import CartList from '../CartList/CartList';
import {RootState} from '../../store';
import styles from './CartWithProductStyles';
import CenteredButton from '../CenteredButton/CenteredButton';
import AccountSummary from '../AccountSummary/AccountSummary';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigations/StackNavigation';

const CartWithProduct = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const navigation = useNavigation<NavigationProp>();

  const screenHeight = Dimensions.get('screen').height;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <View style={{height: screenHeight / 2}}>
        <CartList products={cart?.cartItems} />
      </View>
      <View>
        <AccountSummary />
        <CenteredButton
          text="Checkout"
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    </View>
  );
};

export default CartWithProduct;
