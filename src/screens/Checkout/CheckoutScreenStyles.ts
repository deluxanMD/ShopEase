import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomContainer: {
    paddingBottom: 10,
  },
});

export default styles;
