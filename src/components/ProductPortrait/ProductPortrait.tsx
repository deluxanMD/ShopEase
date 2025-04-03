import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './ProductPortraitStyles';
import {Product} from '../../types/ProductsTypes';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigations/StackNavigation';

interface Props {
  product: Product;
}

const ProductPortrait = ({product}: Props) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          productId: product.id,
        })
      }>
      <Image
        source={{uri: product.thumbnail}}
        height={250}
        resizeMode="cover"
      />
      <Text numberOfLines={1} style={styles.title}>
        {product.title}
      </Text>
      <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
};

export default ProductPortrait;
