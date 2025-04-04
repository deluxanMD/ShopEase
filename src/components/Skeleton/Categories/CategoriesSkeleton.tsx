import {View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './CategoriesSkeletonStyles';

const CategoriesSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={styles.container}>
        <View style={styles.category} />
        <View style={styles.category} />
        <View style={styles.category} />
        <View style={styles.category} />
        <View style={styles.category} />
        <View style={styles.category} />
        <View style={styles.category} />
        <View style={styles.category} />
        <View style={styles.category} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default CategoriesSkeleton;
