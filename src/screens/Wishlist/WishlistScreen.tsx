import {Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Empty from '../../components/Empty/Empty';
import styles from './WishlistScreenStyles';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';

const WishlistScreen = () => {
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlistItems,
  );

  return (
    <View style={styles.container}>
      {wishlistItems?.length > 0 ? (
        <>
          <Text style={styles.title}>Wishlist</Text>
          <ProductsGrid products={wishlistItems} />
        </>
      ) : (
        <Empty icon={faHeart} message="Your wishlist is empty" />
      )}
    </View>
  );
};

export default WishlistScreen;
