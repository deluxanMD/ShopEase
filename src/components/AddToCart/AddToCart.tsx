import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import styles from './AddToCartStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';
import {colors} from '../../utils/colors';

interface Props {
  total: string;
}

const AddToCart = ({total}: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.text, styles.total]}>${total}</Text>
      <View style={styles.addToCartContainer}>
        <FontAwesomeIcon
          icon={faCartShopping}
          color={colors.white}
          style={styles.cartIcon}
        />
        <Text style={styles.text}>Add to Cart</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddToCart;
