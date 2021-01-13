import React from 'react';

import FastImage from 'react-native-fast-image';

import { View, Text, Pressable } from 'react-native';

import Image from './Image';

const defaultColors = [
  '#ff5252',
  '#ff4081',
  '#e040fb',
  '#7c4dff',
  '#536dfe',
  '#448aff',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#558b2f',
  '#ef6c00',
  '#ff5722',
  '#795548',
  '#607d8b',
  '#F4D03F',
];

function sumChars(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

class UserAvatar extends React.PureComponent {
  render() {
    let {
      src,
      name,
      colors = defaultColors,
      fontDecrease,
      size,
      containerStyle,
      textStyle,
      defaultName,
      numOfChar = 1,
    } = this.props;

    if (!fontDecrease) fontDecrease = 2.5;

    if (!name) throw new Error('Avatar requires a name');

    if (typeof size !== 'number') size = parseInt(size);

    let abbr = name.substring(0, numOfChar);

    if (!abbr) abbr = defaultName;

    let i = sumChars(name) % colors.length;

    let backgroundColor = colors[i];

    let srcInner = {
      uri: src,
    };

    if (typeof src !== 'string') {
      srcInner = src;
    }

    var defaultStyle = {
      backgroundColor: backgroundColor,
      height: size,
      width: size,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: size,
    };

    var defaultTextStyle = {
      fontSize: size / 2,
      textTransform: 'uppercase',
      color: '#FFFFFF',
    };

    var defaultImageStyle = {
      height: size,
      width: size,
      borderRadius: size,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };
    return (
      <Pressable onPress={this.props.onPress}>
        <View style={[defaultStyle, containerStyle]}>
          <Text style={[defaultTextStyle, textStyle]}>{abbr}</Text>
          <Image
            src={srcInner}
            style={defaultImageStyle}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </Pressable>
    );
  }
}

export default UserAvatar;
