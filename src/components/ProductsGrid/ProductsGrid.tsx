import {View, FlatList} from 'react-native';
import React from 'react';
import {Product} from '../../types/ProductsTypes';
import styles from './ProductsGridStyles';
import ProductPortrait from '../ProductPortrait/ProductPortrait';

interface Props {
  products: Product[];
}

const ProductsGrid = ({products}: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View key={item.id} style={styles.item}>
            <ProductPortrait product={item} />
          </View>
        )}
      />
    </View>
  );
};

export default ProductsGrid;
