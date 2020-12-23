import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';

import { Header } from './Header';

import { Container } from './Container';

import EStyleSheet from 'react-native-extended-stylesheet';

import { images } from './resources';

import Image from './Image';

import { BoxShadow } from 'react-native-shadow';

const styles = EStyleSheet.create({
  navBack: {
    height: '30rem',
    width: '30rem',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  mainContainer: {
    // flex:1
  },
});

class CollapseToolbar extends Component {
  static defaultProps = {
    toolbarIconRight: <View />,
    transToolbarRight: <View />,
    headerTitle: '',
    footer: <View />,
    transToolbar: undefined,
    toolbar: undefined,
  };

  layout = {};
  dontChangeTab = true;

  state = {
    isTransHeaderShow: false,
  };

  state = {
    headerHeight: 90,
  };

  _onScroll = (e) => {
    if (e.nativeEvent.contentOffset.y > this.state.headerHeight) {
      this.setState({
        isTransHeaderShow: true,
      });
    } else {
      this.setState({
        isTransHeaderShow: false,
      });
    }
  };

  setHeaderHeight = (height) => {
    this.setState({
      headerHeight: height,
    });
  };

  renderTransToolbar() {
    if (this.props.transToolbar) {
      return (
        <View
          style={styles.headerContainer}
          onLayout={(e) => {
            this.setState({
              headerHeight: e.nativeEvent.layout.height,
            });
          }}
        >
          {this.props.transToolbar}
        </View>
      );
    } else {
      const { navigation } = this.props;
      return (
        <View style={styles.headerContainer}>
          <Header
            style={{
              backgroundColor: 'rgb(0,0,0,0.0)',
            }}
            navigation={navigation}
            rightIcon={this.props.transToolbarRight}
            leftIcon={
              <Image src={images.ic_cricle_back} style={styles.navBack} />
            }
          />
        </View>
      );
    }
  }

  renderToolbar() {
    // if (this.props.toolbar){
    //     return(this.props.toolbar)
    // }else{
    const { navigation } = this.props;
    const shadowOpt = {
      width: Dimensions.get('window').width,
      height: this.state.headerHeight,
      color: '#566E94',
      border: 4,
      radius: 1,
      opacity: 0.15,
      x: 0,
      y: 2,
    };
    return (
      <View style={styles.headerContainer}>
        <BoxShadow setting={shadowOpt}>
          {this.props.toolbar && this.props.toolbar}
          {!this.props.toolbar && (
            <Header
              onLayout={(e) => {
                this.setState({
                  headerHeight: e.nativeEvent.layout.height,
                });
              }}
              rightIcon={this.props.toolbarIconRight}
              navigation={navigation}
            >
              {this.props.headerTitle}
            </Header>
          )}
        </BoxShadow>
      </View>
    );
    // }
  }

  render() {
    return (
      <Container>
        <ScrollView onScroll={this._onScroll}>
          <View
            style={[
              styles.mainContainer,
              {
                marginTop: this.state.headerHeight,
              },
            ]}
          >
            {this.props.children}
          </View>
        </ScrollView>
        {!this.state.isTransHeaderShow && this.renderTransToolbar()}
        {this.state.isTransHeaderShow && this.renderToolbar()}
        {this.props.footer}
      </Container>
    );
  }
}

export default CollapseToolbar;
