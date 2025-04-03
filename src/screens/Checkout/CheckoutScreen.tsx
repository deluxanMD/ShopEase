import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './CheckoutScreenStyles';
import Header from '../../components/Header/Header';
import TextBlock from '../../components/TextBlock/TextBlock';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CheckoutModal from '../../components/Modals/CheckoutModal/CheckoutModal';
import CheckoutScreenProvider from './CheckoutScreenProvider';

const CheckoutScreen = () => {
  const checkout = useSelector((state: RootState) => state.cart.checkout);

  const [addressVisible, setAddressVisible] = useState(false);
  const [valueVisible, setValueVisible] = useState(false);

  return (
    <CheckoutScreenProvider value={{setAddressVisible, setValueVisible}}>
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Checkout</Text>
        <TextBlock
          title="Shipping Address"
          value={checkout.address}
          onPress={() => setAddressVisible(true)}
        />
        <TextBlock
          title="Payment Method"
          value={
            checkout.paymentDetails === 'Add Payment Method'
              ? checkout.paymentDetails
              : `****${checkout.paymentDetails.slice(-4)}`
          }
          onPress={() => setValueVisible(true)}
        />
        <CheckoutModal visible={addressVisible} type="address" />
        <CheckoutModal visible={valueVisible} type="payment" />
      </View>
    </CheckoutScreenProvider>
  );
};

export default CheckoutScreen;
