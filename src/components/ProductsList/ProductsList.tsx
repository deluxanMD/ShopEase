import {View} from 'react-native';
import React, {useMemo} from 'react';

import styles from './ProductsListStyles';
import ProductHList from '../ProductHList/ProductHList';
import {useProductsList} from './ProductsListHooks';
import ProductListSkeleton from '../Skeleton/ProductList/ProductListSkeleton';

interface Props {
  title: string;
  isTop?: boolean;
}

const ProductsList = ({title, isTop = false}: Props) => {
  const {products, loading, skip, getMoreProducts} = useProductsList(isTop);

  const initialLoading = useMemo(() => {
    return (isTop && skip === 10) || (!isTop && skip === 0);
  }, [isTop, skip]);

  return (
    <View style={styles.container}>
      {loading && initialLoading ? (
        <ProductListSkeleton />
      ) : (
        <ProductHList
          title={title}
          data={products}
          loading={loading}
          onEndReached={getMoreProducts}
        />
      )}
    </View>
  );
};

export default ProductsList;
