import {View} from 'react-native';
import React from 'react';

import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList} from '../../navigations/StackNavigation';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import styles from './ProductDetailsScreenStyles';
import {useProductDetails} from './ProductDetailsHooks';
import ProductImages from '../../components/ProductImages/ProductImages';

const ProductDetailsScreen = () => {
  const {
    params: {productId},
  } = useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();

  const {product, loading} = useProductDetails(productId);

  return (
    <View style={styles.container}>
      <DetailsHeader />
      <ProductImages images={product?.images || []} />
    </View>
  );
};

export default ProductDetailsScreen;
