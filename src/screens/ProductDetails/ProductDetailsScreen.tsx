import {View, Text} from 'react-native';
import React from 'react';

import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList} from '../../navigations/StackNavigation';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import styles from './ProductDetailsScreenStyles';

const ProductDetailsScreen = () => {
  const {
    params: {productId},
  } = useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();

  return (
    <View style={styles.container}>
      <DetailsHeader />
    </View>
  );
};

export default ProductDetailsScreen;
