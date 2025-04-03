import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  iconContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    padding: 10,
    margin: 10,
  },
});

export default styles;
