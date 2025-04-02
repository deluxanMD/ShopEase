import {View} from 'react-native';
import React from 'react';

import HomeHeader from '../../components/HomeHeader/HomeHeader';
import styles from './HomeScreenStyles';

const HomeScreen = () => {
  return (
    <View style={styles.container} testID="HomeScreen">
      <HomeHeader />
    </View>
  );
};

export default HomeScreen;
