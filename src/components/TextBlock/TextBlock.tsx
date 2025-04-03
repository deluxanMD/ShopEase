import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './TextBlockStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {colors} from '../../utils/colors';

interface Props {
  title: string;
  value: string;
  onPress: () => void;
}

const TextBlock = ({title, value, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} color={colors.gray} />
    </TouchableOpacity>
  );
};

export default TextBlock;
