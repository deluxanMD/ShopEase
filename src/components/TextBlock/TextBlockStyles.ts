import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.mediumGray,
    marginBottom: 8,
    fontSize: 12,
  },
  value: {
    color: colors.gray,
  },
});

export default styles;
