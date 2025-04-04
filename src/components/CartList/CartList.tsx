import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';

import styles from './CartListStyles';
import {useProductPrice} from '../ProductInfo/ProductInfoHooks';
import CustomButton from '../CustomButton/CustomButton';
import {useDispatch} from 'react-redux';
import {
  CartItem,
  removeItemFromCart,
  updateQuantity,
} from '../../store/cart/CartSlice';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons/faTrashAlt';
import {colors} from '../../utils/colors';

interface CartListItemProps {
  product: CartItem;
}

interface CartListProps {
  products: CartItem[];
}

const CartListItem = ({product}: CartListItemProps) => {
  const dispatch = useDispatch();

  const discountedPrice = useProductPrice(
    product?.price || 0,
    product?.discountPercentage || 0,
  );

  const addQuantity = () =>
    dispatch(
      updateQuantity({
        id: product?.id,
        quantity: product?.quantity + 1,
      }),
    );

  const decreaseQuantity = () =>
    dispatch(
      updateQuantity({
        id: product?.id,
        quantity: product?.quantity - 1,
      }),
    );

  const addDisabled = useMemo(
    () => product?.quantity === product?.stock,
    [product?.quantity, product?.stock],
  );

  const decreaseDisabled = useMemo(
    () => product?.quantity === 1,
    [product?.quantity],
  );

  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: product.thumbnail}} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>
          <TouchableOpacity
            onPress={() => dispatch(removeItemFromCart(product?.id))}>
            <FontAwesomeIcon icon={faTrashAlt} color={colors.error} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.price}>
            ${(Number(discountedPrice) * product.quantity).toFixed(2)}
          </Text>
          <Text
            style={
              styles.discountedPrice
            }>{`(${discountedPrice}X${product.quantity})`}</Text>
          <View style={styles.quantityContainer}>
            <CustomButton
              title="-"
              onPress={decreaseQuantity}
              size="small"
              disabled={decreaseDisabled}
            />
            <CustomButton
              title="+"
              onPress={addQuantity}
              size="small"
              disabled={addDisabled}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const CartList = ({products}: CartListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CartListItem product={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CartList;
