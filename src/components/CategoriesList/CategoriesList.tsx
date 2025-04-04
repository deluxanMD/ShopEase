import {Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CategoriesListStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {colors} from '../../utils/colors';

interface Props {
  categories: string[];
}

const CategoriesList = ({categories}: Props) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item, index) => `${item}-${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>{item}</Text>
          <FontAwesomeIcon icon={faChevronRight} color={colors.mediumGray} />
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoriesList;
