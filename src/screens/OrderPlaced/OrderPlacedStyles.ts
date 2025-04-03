import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: Dimensions.get('window').height / 2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
  },
  bottom: {
    height: Dimensions.get('window').height / 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    width: '100%',
  },
});

export default styles;
