import React from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  fontSize16: {
    fontSize: '16rem',
  },
  title: {
    fontSize: '20rem',
    fontWeight: 'bold',
  },
  icon: {
    height: '24rem',
    width: '24rem',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '16rem',
    paddingVertical: '16hrem',
    width: '100%',
    marginTop: 0,
    height: '56rem',
  },
});

const Header = ({
  navigation,
  children,
  action,
  style,
  leftContainerStyle,
  centerContainerStyle,
  rightContainerStyle,
  leftIcon,
  onLayout,
  accentColor = '#C33427',
  titleColor = 'black',
  rightIcon,
}) => {
  var _leftIcon =
    leftIcon == undefined ? (
      <Icon size={24} color={accentColor} name="left" />
    ) : (
      leftIcon
    );

  return (
    <View
      onLayout={(e) => onLayout && onLayout(e)}
      style={[
        {
          backgroundColor: 'white',
        },
        style,
      ]}
    >
      <View style={[styles.container, style]}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'transparent',
          }}
        >
          {action !== undefined && navigation == undefined && (
            <View
              style={[
                {
                  flex: 0.15,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  alignItems: 'center',
                },
                leftContainerStyle,
              ]}
            >
              <TouchableWithoutFeedback onPress={() => action()}>
                {_leftIcon}
              </TouchableWithoutFeedback>
            </View>
          )}

          {navigation !== undefined && action == undefined && (
            <View
              style={[
                {
                  flex: 0.15,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  alignItems: 'center',
                },
                leftContainerStyle,
              ]}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.goBack();
                }}
              >
                {_leftIcon}
              </TouchableWithoutFeedback>
            </View>
          )}

          <View
            style={[
              {
                flex: 1,
                backgroundColor: 'transparent',
                alignItems: 'center',
                flexDirection: 'row',
              },
              centerContainerStyle,
            ]}
          >
            {typeof children === 'string' && (
              <Text style={[styles.title, { color: titleColor }]}>
                {children}
              </Text>
            )}

            {typeof children !== 'string' && children}
          </View>

          {rightIcon !== undefined && (
            <View
              style={[
                {
                  flex: 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                },
                rightContainerStyle,
              ]}
            >
              {rightIcon}
            </View>
          )}

          {navigation !== undefined && rightIcon === undefined && (
            <View
              style={{
                flex: 0.15,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
            >
              <Icon size={24} color={'transparent'} name="left" />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
