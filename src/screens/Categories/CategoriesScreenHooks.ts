import axios from 'axios';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

export const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
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

  const getCategories = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${process.env.API_URL}/products/category-list`,
      );

      if (response.status !== 200) {
        errorAlert('Something went wrong! Please try again later.');
      }

      setCategories(response.data);
    } catch (_error) {
      console.log(_error);
      errorAlert('Something went wrong! Please try again later.');
    }

    setLoading(false);
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {categories, loading};
};
