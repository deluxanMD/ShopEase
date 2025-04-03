import {View, Text} from 'react-native';
import React from 'react';
import {Product} from '../../types/ProductsTypes';

interface Props {
  products: Product[];
}

const ProductsGrid = ({products}: Props) => {
  return (
    <View>
      <Text>ProductsGrid</Text>
    </View>
  );
};

export default ProductsGrid;
