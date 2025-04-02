import {View} from 'react-native';
import React from 'react';

import styles from './ProductsListStyles';
import ProductHList from '../ProductHList/ProductHList';
import {useProductsList} from './ProductsListHooks';

interface Props {
  title: string;
  isTop?: boolean;
}

const ProductsList = ({title, isTop = false}: Props) => {
  const {products, loading, getMoreProducts} = useProductsList(isTop);

  return (
    <View style={styles.container}>
      <ProductHList
        title={title}
        data={products}
        loading={loading}
        onEndReached={getMoreProducts}
      />
    </View>
  );
};

export default ProductsList;
