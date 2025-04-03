import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './QuantityControllerStyles';
import {Product} from '../../types/ProductsTypes';
import {colors} from '../../utils/colors';
import {useCart} from '../../screens/ProductDetails/ProductDetailsHooks';

interface Props {
  product: Product;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const QuantityController = ({
  product,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: Props) => {
  const {isAdded} = useCart(product);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Quantity</Text>
        <Text style={styles.max}>(Max: {product?.stock})</Text>
      </View>
      {!!product?.stock && (
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: isAdded
                  ? colors.gray
                  : quantity < 2
                  ? colors.gray
                  : colors.primary,
              },
            ]}
            onPress={decreaseQuantity}
            disabled={isAdded ? true : quantity < 2}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text>{quantity}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: isAdded
                  ? colors.gray
                  : quantity >= product?.stock
                  ? colors.gray
                  : colors.primary,
              },
            ]}
            onPress={increaseQuantity}
            disabled={isAdded ? true : quantity >= product?.stock}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default QuantityController;
