import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './DetailsHeaderStyles';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons/faHeart';
import {faHeart as faHeartsolid} from '@fortawesome/free-solid-svg-icons/faHeart';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigations/StackNavigation';

const DetailsHeader = () => {
  const navigation = useNavigation<NavigationProp>();

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faHeartRegular} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default DetailsHeader;
