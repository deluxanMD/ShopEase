import {View, Text} from 'react-native';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

interface Props {
  title: string;
}

const ProductHList = ({title}: Props) => {
  return (
    <View>
      <SectionTitle title={title} />
      <Text>ProductHList</Text>
    </View>
  );
};

export default ProductHList;
