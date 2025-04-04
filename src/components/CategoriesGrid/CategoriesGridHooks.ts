import axios from 'axios';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {Product} from '../../types/ProductsTypes';

export const useProductsByCategory = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      const response = await axios.get(
        `${process.env.API_URL}/products/category/${category}`,
      );

      if (response.status !== 200) {
        errorAlert('Something went wrong! Please try again later.');
      }

      setProducts(response.data?.products);
    } catch (_error) {
      console.log(_error);
      errorAlert('Something went wrong! Please try again later.');
    }

    setLoading(false);
  };

  useEffect(() => {
    getProductsByCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {products, loading};
};
