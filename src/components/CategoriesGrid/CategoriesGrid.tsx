import {View, Text} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigations/StackNavigation';
import styles from './CategoriesGridStyles';
import Header from '../Header/Header';
import {useProductsByCategory} from './CategoriesGridHooks';
import ProductsGridSkeleton from '../Skeleton/ProductsGrid/ProductsGridSkeleton';
import ProductsGrid from '../ProductsGrid/ProductsGrid';

const CategoriesGrid = () => {
  const {
    params: {category},
  } = useRoute<RouteProp<RootStackParamList, 'CategoriesGrid'>>();

  const {products, loading} = useProductsByCategory(category);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{category}</Text>
        {loading ? (
          <ProductsGridSkeleton />
        ) : (
          <ProductsGrid products={products} />
        )}
      </View>
    </View>
  );
};

export default CategoriesGrid;
