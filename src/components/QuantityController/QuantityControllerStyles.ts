import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    padding: 10,
    marginVertical: 15,
    borderRadius: 50,
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 16,
  },
  max: {
    fontSize: 12,
    marginLeft: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 120,
  },
  button: {
    width: 35,
    height: 35,
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});

export default styles;
