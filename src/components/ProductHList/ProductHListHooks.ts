import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import axios from 'axios';

export const useProductHList = (category: string) => {
  const [products, setProducts] = useState([]);

  const errorAlert = (error: string) => {
    Alert.alert('Network Error', error, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  const getProductsByCategory = async () => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/products/category/${category}`,
      );
      console.log(response);
      if (response.status !== 200) {
        errorAlert('Something went wrong! Please try again later.');
      }

      setProducts(response.data?.products);
    } catch (_error) {
      console.log(_error);
      errorAlert('Something went wrong! Please try again later.');
    }
  };

  useEffect(() => {
    getProductsByCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {products};
};
