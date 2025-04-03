import {View} from 'react-native';
import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './ButtonSkeletonStyles';

const ButtonSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={styles.container} />
    </SkeletonPlaceholder>
  );
};

export default ButtonSkeleton;
