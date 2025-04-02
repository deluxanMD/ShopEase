import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

import styles from './SectionTitleStyles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigations/StackNavigation';

interface Props<T> {
  title: string;
  style: StyleProp<T>;
}

const SectionTitle = ({title, style}: Props<ViewStyle>) => {
  const navigation = useNavigation<NavigationProp>();

  const navigateToCategories = () => {
    navigation.navigate('Categories');
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={navigateToCategories}>
        <Text style={styles.linkText}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionTitle;
