import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import axios from 'axios';

import {Product} from '../../types/ProductsTypes';

export const useProductDetails = (productId: number) => {
  const [product, setProduct] = useState<Product | null>(null);
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

  const getProductById = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${process.env.API_URL}/products/${productId}`,
      );

      if (response.status !== 200) {
        errorAlert('Something went wrong! Please try again later.');
      }

      setProduct(response.data);
    } catch (_error) {
      console.log(_error);
      errorAlert('Something went wrong! Please try again later.');
    }

    setLoading(false);
  };

  useEffect(() => {
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return {product, loading};
};

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev - 1);

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity,
  };
};
