import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './ProductPortraitStyles';
import {Product} from '../../types/ProductsTypes';
import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface Props {
  product: Product;
}

const ProductPortrait = ({product}: Props) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faHeart} style={styles.heart} />
      <Image
        source={{uri: product.thumbnail}}
        height={250}
        resizeMode="cover"
      />
      <Text numberOfLines={1} style={styles.title}>
        {product.title}
      </Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductPortrait;
