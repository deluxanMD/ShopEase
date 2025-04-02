import {ButtonProps, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './CustomButtonStyles';

const CustomButton = ({title, onPress, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer} {...rest}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
