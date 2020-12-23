import React, { Component } from 'react';

import { ScrollView, TouchableWithoutFeedback } from 'react-native';

import { ButtonGroup } from 'react-native-elements';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  scrollView: {
    maxHeight: '60rem',
  },
  selectedButton: {
    borderBottomWidth: '5rem',
    borderBottomColor: '#C33427',
    backgroundColor: 'white',
  },
  selectedText: {
    color: '#C33427',
    fontSize: '14rem',
  },
  text: {
    color: '#BDC3C7',
    fontSize: '14rem',
  },
  button: {
    borderBottomWidth: '5rem',
    borderBottomColor: 'rgba(0,0,0,0.0)',
  },
  buttonContainer: {
    paddingHorizontal: '10rem',
    borderBottomWidth: 0,
  },
  containerStyle: {
    height: '40rem',
    borderWidth: 0,
  },
});

class HorizontalButtonGroup extends Component {
  state = {
    selectedIndex: 0,
  };

  setIndex = (index) => {
    this.setState({
      selectedIndex: index,
    });
    var layoutX = (styles.buttonContainer.width * (index + 1)) / 2;
    var option = {};
    option.animated = true;
    (option.x = layoutX), (option.y = 0);
    this.refs.scrollView.scrollTo(option);
  };
  onScroll = (e) => {
    console.log('HorizontalButtonGroup', e);
  };

  render() {
    return (
      <ScrollView
        ref={'scrollView'}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={[styles.scrollView, this.props.style]}
      >
        <ButtonGroup
          Component={TouchableWithoutFeedback}
          onPress={(index) => {
            this.setState({
              selectedIndex: index,
            });
            if (this.props.onPress) this.props.onPress(index);
          }}
          selectedIndex={this.state.selectedIndex}
          selectedButtonStyle={[
            styles.selectedButton,
            this.props.selectedButtonStyle,
          ]}
          selectedTextStyle={[
            styles.selectedText,
            this.props.selectedTextStyle,
          ]}
          textStyle={[styles.text, this.props.textStyle]}
          buttonStyle={[styles.button, this.props.buttonStyle]}
          innerBorderStyle={{
            width: 0,
          }}
          buttonContainerStyle={[
            styles.buttonContainer,
            this.props.buttonContainerStyle,
          ]}
          buttons={this.props.buttons}
          containerStyle={[styles.containerStyle, this.props.containerStyle]}
        />
      </ScrollView>
    );
  }
}

export default HorizontalButtonGroup;
