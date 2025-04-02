import {View, Image, Text} from 'react-native';
import React from 'react';

import styles from './HomeHeaderStyles';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/user.png')}
        style={styles.userImage}
        testID="home-header-image"
      />
      <View style={styles.userDetails}>
        <Text testID="home-header-greeting">Hi 👋</Text>
        <Text testID="home-header-welcome">Welcome, Deluxan</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
