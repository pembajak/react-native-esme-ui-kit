import React from 'react';
import { View } from 'react-native';

const Divider = ({ height = 5, backgroundColor = '#F7F7FA', style }) => {
  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          height: height,
        },
        style,
      ]}
    />
  );
};

export default Divider;
