import {View} from 'react-native';
import React from 'react';

import styles from './ProductSkeletonStyles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ProductSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={styles.container} />
    </SkeletonPlaceholder>
  );
};

export default ProductSkeleton;
