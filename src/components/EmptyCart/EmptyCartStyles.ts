import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 25,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 50,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
