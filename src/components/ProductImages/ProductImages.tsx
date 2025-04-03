import {View, Image, FlatList} from 'react-native';
import React from 'react';

import styles from './ProductImagesStyles';

interface Props {
  images: string[];
}

const ProductImages = ({images}: Props) => {
  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <Image source={{uri: item}} width={150} height={300} />
          </View>
        )}
      />
    </View>
  );
};

export default ProductImages;
