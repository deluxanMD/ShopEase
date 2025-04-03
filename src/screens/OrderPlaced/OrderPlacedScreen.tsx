import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './OrderPlacedStyles';
import CenteredButton from '../../components/CenteredButton/CenteredButton';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigations/StackNavigation';

const OrderPlacedScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require('../../assets/images/OrderPlaced.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>Order Placed Successfully</Text>
        <Text style={styles.message}>
          You'll receive an confirmation email shortly. Please check your inbox.
        </Text>
        <View style={styles.button}>
          <CenteredButton
            text="Browse More"
            onPress={() =>
              navigation.reset({index: 0, routes: [{name: 'App'}]})
            }
          />
        </View>
      </View>
    </View>
  );
};

export default OrderPlacedScreen;
