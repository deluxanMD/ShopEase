import {View, Text} from 'react-native';
import React from 'react';

import styles from './ProductInfoStyles';
import {Product} from '../../types/ProductsTypes';
import {useProductPrice} from './ProductInfoHooks';
import QuantityController from '../QuantityController/QuantityController';

interface Props {
  product: Partial<Product>;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const ProductInfo = ({
  product,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: Props) => {
  const discountedPrice = useProductPrice(
    product?.price || 0,
    product?.discountPercentage || 0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product?.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${product?.price}</Text>
        <Text style={styles.discountedPrice}>${discountedPrice}</Text>
      </View>
      <Text style={styles.description}>{product?.description}</Text>
      <QuantityController
        product={product}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </View>
  );
};

export default ProductInfo;
