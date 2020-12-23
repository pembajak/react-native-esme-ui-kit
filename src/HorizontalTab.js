import React, { Component } from 'react';

import { View, Pressable, Text, Dimensions } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    width: '100%',
    paddingTop: '16rem',
  },
  tabContainerIndicator: {
    width: '90%',
    height: '3rem',
    marginTop: '16rem',
    borderRadius: '10rem',
  },
  textStyle: {
    fontSize: '14rem',
    fontWeight: 'bold',
  },
});

class HorizontalTab extends Component {
  static propTypes = {
    indicatorColor: PropTypes.string,
    selectedTextColor: PropTypes.string,
    textColor: PropTypes.string,
    onTabPress: PropTypes.func,
    selectedIndex: PropTypes.number,
  };
  static defaultProps = {
    indicatorColor: '#E74C3C',
    selectedTextColor: '#E74C3C',
    textColor: '#BDC3C7',
    onTabPress: undefined,
  };

  state = {
    selectedIndex: this.props.selectedIndex,
  };

  _onTabPress(index) {
    this.setState(
      {
        selectedIndex: index,
      },
      () => this.props.onTabPress && this.props.onTabPress(index)
    );
  }

  setIndex = (index) => {
    this.setState({
      selectedIndex: index,
    });
  };

  render() {
    if (!this.props.buttons) {
      throw new Error('Please add buttons props');
    }
    var buttonWidth = width / this.props.buttons.length;

    return (
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {this.props.buttons.map((button, index) => {
          var bgColorIndicator =
            this.state.selectedIndex == index
              ? this.props.indicatorColor
              : '#ffffff';
          var textColor =
            this.state.selectedIndex == index
              ? this.props.selectedTextColor
              : this.props.textColor;
          return (
            <Pressable onPress={() => this._onTabPress(index)}>
              <View
                style={[
                  styles.tabContainer,
                  {
                    width: buttonWidth,
                  },
                ]}
              >
                <Text
                  numberOfLines={1}
                  style={[
                    styles.textStyle,
                    {
                      color: textColor,
                    },
                  ]}
                >
                  {button}
                </Text>
                <View
                  style={[
                    styles.tabContainerIndicator,
                    {
                      backgroundColor: bgColorIndicator,
                    },
                  ]}
                />
              </View>
            </Pressable>
          );
        })}
      </View>
    );
  }
}

export default HorizontalTab;
