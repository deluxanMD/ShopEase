import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    marginHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 10,
  },
});

export default styles;
