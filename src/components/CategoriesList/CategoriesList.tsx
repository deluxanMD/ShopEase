import {Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CategoriesListStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigations/StackNavigation';

interface Props {
  categories: string[];
}

const CategoriesList = ({categories}: Props) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <FlatList
      data={categories}
      keyExtractor={(item, index) => `${item}-${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            navigation.navigate('CategoriesGrid', {category: item})
          }>
          <Text style={styles.categoryText}>{item}</Text>
          <FontAwesomeIcon icon={faChevronRight} color={colors.mediumGray} />
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoriesList;
