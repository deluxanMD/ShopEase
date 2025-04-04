import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  item: {
    width: Dimensions.get('window').width / 2.3,
    height: Dimensions.get('window').height / 2.3,
  },
});

export default styles;
