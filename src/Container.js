import React from 'react';
import { View, Platform, StatusBar, Dimensions } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const height = Dimensions.get('window').height;

const Container = ({ children, style }) => {
  var statusBarStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
  return (
    <View style={styles.containerParent}>
      <View style={[styles.container, style]}>
        <StatusBar barStyle={statusBarStyle} backgroundColor={'#000000'} />
        {children}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:
      Platform.OS === 'ios' ? (height > 667 ? '35hrem' : '16hrem') : '0rem',
    marginBottom: Platform.OS === 'ios' ? 0 : 0,
  },
  containerParent: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Container;
