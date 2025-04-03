import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalView: {
    height: Dimensions.get('window').height / 2,
    backgroundColor: colors.white,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
