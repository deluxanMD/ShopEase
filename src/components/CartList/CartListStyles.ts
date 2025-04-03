import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  itemContainer: {
    backgroundColor: colors.lightGray,
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
  },
  infoContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    width: 200,
  },
  price: {
    fontWeight: 'bold',
  },
  quantityContainer: {
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
