import {ScrollView, View} from 'react-native';
import React from 'react';

import HomeHeader from '../../components/HomeHeader/HomeHeader';
import styles from './HomeScreenStyles';
import {useHomeScreen} from './HomeScreenHooks';
import ProductHList from '../../components/ProductHList/ProductHList';

const HomeScreen = () => {
  const {topSellings, newArrivals} = useHomeScreen();

  return (
    <ScrollView style={styles.container} testID="HomeScreen">
      <View style={styles.headerContainer}>
        <HomeHeader />
      </View>
      <View style={styles.productsListContainer}>
        <ProductHList title="Top selling" data={topSellings} />
      </View>
      <View style={styles.productsListContainer}>
        <ProductHList title="New Arrivals" data={newArrivals} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
