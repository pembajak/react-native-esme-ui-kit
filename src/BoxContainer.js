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
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: '16rem',
    fontWeight: '700',
    lineHeight: '21.89rem',
  },
});

const BoxContainer = ({
  style,
  title,
  titleChild,
  children,
  rightComponent,
}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={styles.titleContainer}>
        {titleChild !== undefined && titleChild}

        {title !== undefined && <Text style={styles.title}>{title}</Text>}
        {rightComponent !== undefined && rightComponent}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default BoxContainer;
