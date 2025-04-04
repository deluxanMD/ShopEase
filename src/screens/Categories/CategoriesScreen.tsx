import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import styles from './CategoriesScreenStyles';
import CategoriesSkeleton from '../../components/Skeleton/Categories/CategoriesSkeleton';
import {useCategories} from './CategoriesScreenHooks';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const CategoriesScreen = () => {
  const {categories, loading} = useCategories();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.content}>
          {loading ? (
            <CategoriesSkeleton />
          ) : (
            <CategoriesList categories={categories} />
          )}
        </View>
      </View>
    </View>
  );
};

export default CategoriesScreen;
