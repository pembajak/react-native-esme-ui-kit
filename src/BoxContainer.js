import React from 'react';
import { View, Text } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    padding: '16rem',
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
    paddingBottom: '14rem',
  },
  title: {
    fontSize: '16rem',
    fontWeight: '700',
    lineHeight: '21.89rem',
  },
});

const BoxContainer = ({ title, titleChild, children }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        {titleChild !== undefined && titleChild}

        {title !== undefined && <Text style={styles.title}>{title}</Text>}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default BoxContainer;
