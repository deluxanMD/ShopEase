import React, {useContext, useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './AddressFormStyles';
import CenteredButton from '../../CenteredButton/CenteredButton';
import {useDispatch, useSelector} from 'react-redux';
import {saveAddress as saveShippingAddress} from '../../../store/cart/CartSlice';
import {CheckoutScreenContext} from '../../../screens/Checkout/CheckoutScreenProvider';
import {RootState} from '../../../store';

const AddressForm = () => {
  const dispatch = useDispatch();
  const address = useSelector(
    (state: RootState) => state.cart.checkout.address,
  );
  const [value, setValue] = useState(
    address === 'Add Shipping Address' ? '' : address,
  );
  const contextValue = useContext(CheckoutScreenContext);

  const saveAddress = () => {
    dispatch(saveShippingAddress(value));
    contextValue?.setAddressVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Address"
        style={styles.input}
        value={value}
        onChange={e => setValue(e.nativeEvent.text)}
      />
      <CenteredButton text="Save" onPress={saveAddress} />
    </View>
  );
};

export default AddressForm;
