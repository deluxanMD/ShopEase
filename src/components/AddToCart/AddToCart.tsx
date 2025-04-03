import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import styles from './AddToCartStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';
import {colors} from '../../utils/colors';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/cart/CartSlice';
import {Product} from '../../types/ProductsTypes';
import {useProductPrice} from '../ProductInfo/ProductInfoHooks';
import {useCart} from '../../screens/ProductDetails/ProductDetailsHooks';

interface Props {
  product: Product;
  quantity: number;
}

const AddToCart = ({product, quantity}: Props) => {
  const dispatch = useDispatch();
  const {isAdded} = useCart(product);

  const discountedPrice = useProductPrice(
    product?.price || 0,
    product?.discountPercentage || 0,
  );

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: isAdded ? colors.gray : colors.primary},
      ]}
      onPress={() => dispatch(addToCart(product))}
      disabled={isAdded}>
      {!isAdded && (
        <Text style={[styles.text, styles.total]}>
          ${quantity * Number(discountedPrice)}
        </Text>
      )}
      <View style={styles.addToCartContainer}>
        {isAdded ? (
          <Text style={styles.text}>Added to Cart</Text>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faCartShopping}
              color={colors.white}
              style={styles.cartIcon}
            />
            <Text style={styles.text}>Add to Cart</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AddToCart;
