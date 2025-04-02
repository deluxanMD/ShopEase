import {FlatList, View} from 'react-native';
import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import {Product} from '../../types/ProductsTypes';
import ProductPortrait from '../ProductPortrait/ProductPortrait';
import styles from './ProductHListStyles';

interface Props {
  title: string;
  data: Product[];
}

const ProductHList = ({title, data}: Props) => {
  return (
    <View>
      <SectionTitle title={title} style={styles.title} />
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View key={item.id}>
            <ProductPortrait product={item} />
          </View>
        )}
      />
    </View>
  );
};

export default ProductHList;
