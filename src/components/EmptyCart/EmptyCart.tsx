import {View, Text} from 'react-native';
import React from 'react';

import styles from './EmptyCartStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';
// import {useNavigation} from '@react-navigation/native';
// import {NavigationProp} from '../../navigations/StackNavigation';

const EmptyCart = () => {
  //   const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faCartShopping} size={32} />
      <Text style={styles.info}>Your cart is empty</Text>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('App')}>
        <Text style={styles.buttonText}>Explore Products</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default EmptyCart;
