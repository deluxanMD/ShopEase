import {View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './ProductsGridStyles';

const ProductsGridSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.item} />
          <View style={styles.item} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default ProductsGridSkeleton;
