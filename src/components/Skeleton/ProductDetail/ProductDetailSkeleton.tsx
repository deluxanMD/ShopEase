import {View, Text} from 'react-native';
import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './ProductDetailSkeletonStyles';

const ProductDetailSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <View style={styles.image} />
          <View style={styles.image} />
          <View style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.price}>Title</Text>
          <Text style={styles.description}>Title</Text>
          <View style={styles.button} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default ProductDetailSkeleton;
