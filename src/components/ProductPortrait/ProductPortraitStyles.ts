import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    width: 180,
    height: 300,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: 10,
  },
  heart: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: 'light',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
