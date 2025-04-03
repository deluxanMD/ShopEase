import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';

import styles from './CenteredButtonStyles';
import {colors} from '../../utils/colors';

type Props = {
  text: string;
} & TouchableOpacityProps;

const CenteredButton = ({text, disabled, ...rest}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: disabled ? colors.gray : colors.primary},
      ]}
      disabled={disabled}
      {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CenteredButton;
