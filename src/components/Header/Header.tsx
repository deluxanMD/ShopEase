import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';

import styles from './HeaderStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigations/StackNavigation';

interface Props {
  title?: string;
}

const Header = ({title}: Props) => {
  const navigation = useNavigation<NavigationProp>();

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} />
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
