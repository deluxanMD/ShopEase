import {View} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';

import {RootState} from '../../store';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import styles from './CartScreenStyles';
import CartWithProduct from '../../components/CartWithProduct/CartWithProduct';
// import Header from '../../components/Header/Header';

const CartScreen = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      {cart?.cartItems.length > 0 ? <CartWithProduct /> : <EmptyCart />}
    </View>
  );
};

export default CartScreen;
