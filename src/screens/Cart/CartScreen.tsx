import {View} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';

import {RootState} from '../../store';
import Empty from '../../components/Empty/Empty';
import styles from './CartScreenStyles';
import CartWithProduct from '../../components/CartWithProduct/CartWithProduct';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';

const CartScreen = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <View style={styles.container}>
      {cart?.cartItems.length > 0 ? (
        <CartWithProduct />
      ) : (
        <Empty icon={faCartShopping} message="Your cart is empty" />
      )}
    </View>
  );
};

export default CartScreen;
