import {View, Text} from 'react-native';
import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './ProductListSkeletonStyles';

const ProductListSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View>
        <Text style={styles.title}>Title</Text>
        <View style={styles.productsListContainer}>
          <View style={styles.product} />
          <View style={styles.product} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default ProductListSkeleton;
