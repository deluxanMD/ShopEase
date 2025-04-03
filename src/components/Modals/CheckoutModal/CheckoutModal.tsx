import {View, Modal, ModalProps} from 'react-native';
import React from 'react';
import styles from './CheckoutModalStyles';
import AddressForm from '../../forms/AddressForm/AddressForm';
import PaymentForm from '../../forms/PaymentForm/PaymentForm';

type CheckoutModalProps = {
  type: 'address' | 'payment';
} & ModalProps;

const CheckoutModal = ({type, ...rest}: CheckoutModalProps) => {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent {...rest}>
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            {type === 'address' ? <AddressForm /> : <PaymentForm />}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CheckoutModal;
