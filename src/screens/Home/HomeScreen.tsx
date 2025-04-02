import {Alert, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import axios from 'axios';

import HomeHeader from '../../components/HomeHeader/HomeHeader';
import styles from './HomeScreenStyles';
import ProductHList from '../../components/ProductHList/ProductHList';

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);

  const errorAlert = (error: string) => {
    Alert.alert('Network Error', error, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/products/category-list`,
      );
      console.log(response);
      if (response.status !== 200) {
        errorAlert('Something went wrong! Please try again later.');
      }

      setCategories(response.data);
    } catch (_error) {
      console.log(_error);
      errorAlert('Something went wrong! Please try again later.');
    }
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container} testID="HomeScreen">
      <View style={styles.headerContainer}>
        <HomeHeader />
      </View>
      <View style={styles.productsListContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {categories?.map((category, index) => (
            <View key={`${category}-${index}`} style={styles.hListContainer}>
              <ProductHList title={category} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
