import {ButtonProps, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './CustomButtonStyles';
import {colors} from '../../utils/colors';

type CustomButtonProps = {
  size?: 'small' | 'normal';
} & ButtonProps;

const CustomButton = ({
  title,
  size = 'normal',
  disabled,
  onPress,
  ...rest
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.btnContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          padding: size === 'normal' ? 10 : 4,
          width: size === 'small' ? 25 : 'auto',
          backgroundColor: disabled ? colors.gray : colors.primary,
        },
      ]}
      {...rest}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
