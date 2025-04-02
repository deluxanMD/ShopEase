import {ScrollView, View} from 'react-native';
import React from 'react';

import HomeHeader from '../../components/HomeHeader/HomeHeader';
import styles from './HomeScreenStyles';
import ProductsList from '../../components/ProductsList/ProductsList';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} testID="HomeScreen">
      <View style={styles.headerContainer}>
        <HomeHeader />
      </View>
      <ProductsList title="Top selling" isTop />
      <ProductsList title="New arrivals" />
    </ScrollView>
  );
};

export default HomeScreen;
