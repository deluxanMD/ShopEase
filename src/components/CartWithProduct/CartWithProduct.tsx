import {
  View,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import CartList from '../CartList/CartList';
import {RootState} from '../../store';
import styles from './CartWithProductStyles';
import CenteredButton from '../CenteredButton/CenteredButton';
import AccountSummary from '../AccountSummary/AccountSummary';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigations/StackNavigation';
import {resetCart} from '../../store/cart/CartSlice';

const CartWithProduct = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const screenHeight = Dimensions.get('screen').height;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <TouchableOpacity
        style={styles.removeAllButton}
        onPress={() => dispatch(resetCart())}>
        <Text>Remove all</Text>
      </TouchableOpacity>
      <View style={{height: screenHeight / 2}}>
        <CartList products={cart?.cartItems} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <AccountSummary />
          <CenteredButton
            text="Checkout"
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CartWithProduct;
