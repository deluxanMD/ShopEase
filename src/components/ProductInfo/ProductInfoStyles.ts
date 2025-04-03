import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: 10,
  },
  price: {
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountedPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  description: {
    fontSize: 14,
  },
});

export default styles;
