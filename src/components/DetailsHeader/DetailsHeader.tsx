import {View, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './DetailsHeaderStyles';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons/faHeart';
import {faHeart as faHeartsolid} from '@fortawesome/free-solid-svg-icons/faHeart';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigations/StackNavigation';
import {Product} from '../../types/ProductsTypes';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist} from '../../store/wishlist/WishlistSlice';
import {RootState} from '../../store';
import {colors} from '../../utils/colors';

interface Props {
  product: Product | null;
}

const DetailsHeader = ({product}: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlistItems,
  );
  const dispatch = useDispatch();

  const isAdded = useMemo(
    () => wishlistItems?.some(item => item.id === product?.id),
    [wishlistItems, product],
  );

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} />
      </TouchableOpacity>
      {!!product && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => dispatch(addToWishlist(product))}>
          <FontAwesomeIcon
            icon={isAdded ? faHeartsolid : faHeartRegular}
            size={20}
            color={colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DetailsHeader;
