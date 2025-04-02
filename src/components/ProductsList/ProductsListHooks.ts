import {useEffect, useState} from 'react';
import {Product} from '../../types/ProductsTypes';
import {Alert} from 'react-native';
import axios from 'axios';

export const useProductsList = (isTop: boolean) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(isTop ? 10 : 0);
  const [loading, setLoading] = useState(false);

  const limit = 4;

  const errorAlert = (error: string) => {
    Alert.alert('Network Error', error, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  const getProducts = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${process.env.API_URL}/products?limit=${limit}&skip=${skip}`,
      );

      if (response.status !== 200) {
        errorAlert('Something went wrong! Please try again later.');
      }

      setProducts(prev => [...prev, ...response.data?.products]);
    } catch (_error) {
      console.log(_error);
      errorAlert('Something went wrong! Please try again later.');
    }

    setLoading(false);
  };

  const getMoreProducts = async () => {
    if (!loading) {
      setSkip(prev => prev + limit);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  return {products, loading, getMoreProducts};
};
