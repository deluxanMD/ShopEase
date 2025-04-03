import {View, ScrollView} from 'react-native';
import React from 'react';

import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList} from '../../navigations/StackNavigation';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import styles from './ProductDetailsScreenStyles';
import {useProductDetails, useQuantity} from './ProductDetailsHooks';
import ProductImages from '../../components/ProductImages/ProductImages';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import AddToCart from '../../components/AddToCart/AddToCart';
import ProductDetailSkeleton from '../../components/Skeleton/ProductDetail/ProductDetailSkeleton';
import ButtonSkeleton from '../../components/Skeleton/Button/ButtonSkeleton';

const ProductDetailsScreen = () => {
  const {
    params: {productId},
  } = useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();

  const {product, loading} = useProductDetails(productId);

  const {quantity, increaseQuantity, decreaseQuantity} = useQuantity();

  return (
    <View style={styles.container}>
      <DetailsHeader product={product} />
      <ScrollView>
        {loading ? (
          <ProductDetailSkeleton />
        ) : (
          <>
            <ProductImages images={product?.images || []} />
            {!!product && (
              <ProductInfo
                product={product}
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            )}
          </>
        )}
      </ScrollView>
      {loading ? (
        <ButtonSkeleton />
      ) : (
        !!product && <AddToCart quantity={quantity} product={product} />
      )}
    </View>
  );
};

export default ProductDetailsScreen;
