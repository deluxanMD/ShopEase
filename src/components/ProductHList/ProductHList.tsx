import {FlatList, Text, View} from 'react-native';
import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import {Product} from '../../types/ProductsTypes';
import ProductPortrait from '../ProductPortrait/ProductPortrait';
import styles from './ProductHListStyles';

type Props = {
  title: string;
  data: Product[];
  loading: boolean;
  onEndReached: () => void;
};

const ProductHList = ({title, data, loading, onEndReached}: Props) => {
  return (
    <View>
      <SectionTitle title={title} style={styles.title} />
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={loading ? <Text>Loading...</Text> : null}
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
