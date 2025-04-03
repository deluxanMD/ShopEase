import {View, TextInput} from 'react-native';
import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {CheckoutScreenContext} from '../../../screens/Checkout/CheckoutScreenProvider';
import {savePaymentDetails} from '../../../store/cart/CartSlice';
import styles from '../AddressForm/AddressFormStyles';
import CenteredButton from '../../CenteredButton/CenteredButton';

const PaymentForm = () => {
  const dispatch = useDispatch();
  const paymentDetails = useSelector(
    (state: RootState) => state.cart.checkout.paymentDetails,
  );
  const [value, setValue] = useState(
    paymentDetails === 'Add Payment Method' ? '' : paymentDetails,
  );
  const contextValue = useContext(CheckoutScreenContext);

  const saveCard = () => {
    dispatch(savePaymentDetails(value));
    contextValue?.setValueVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Payment detail"
        style={styles.input}
        value={value}
        onChange={e => setValue(e.nativeEvent.text)}
      />
      <CenteredButton text="Save" onPress={saveCard} />
    </View>
  );
};

export default PaymentForm;
