import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import axios from 'axios';

export const useHomeScreen = () => {
  const [topSellings, setTopSellings] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  const errorAlert = (error: string) => {
    Alert.alert('Network Error', error, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  const getTopSellingProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/products?limit=20&skip=10`,
      );
      console.log(response);
      if (response.status !== 200) {
        errorAlert('Something went wrong! Please try again later.');
      }

      setTopSellings(response.data?.products);
    } catch (_error) {
      console.log(_error);
      errorAlert('Something went wrong! Please try again later.');
    }
  };

  const getNewArrivalProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/products?limit=20`,
      );
      console.log(response);
      if (response.status !== 200) {
        errorAlert('Something went wrong! Please try again later.');
      }

      setNewArrivals(response.data?.products);
    } catch (_error) {
      console.log(_error);
      errorAlert('Something went wrong! Please try again later.');
    }
  };

  useEffect(() => {
    getTopSellingProducts();
    getNewArrivalProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {topSellings, newArrivals};
};
