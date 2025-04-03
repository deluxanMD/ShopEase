import {View, Text} from 'react-native';
import React from 'react';

import styles from './EmptyStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconDefinition;
  message: string;
}

const Empty = ({icon, message}: Props) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={icon} size={32} />
      <Text style={styles.info}>{message}</Text>
    </View>
  );
};

export default Empty;
