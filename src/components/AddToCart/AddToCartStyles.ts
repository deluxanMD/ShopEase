import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  text: {
    color: colors.white,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    marginRight: 10,
  },
});

export default styles;
