import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  imagecontainer: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
    width: 150,
    height: 300,
  },
  infoContainer: {
    marginVertical: 10,
  },
  title: {
    height: 20,
    marginVertical: 5,
  },
  price: {
    width: 100,
    height: 20,
    marginVertical: 10,
  },
  description: {
    height: 100,
  },
  button: {
    height: 50,
    borderRadius: 50,
    marginVertical: 10,
  },
});

export default styles;
