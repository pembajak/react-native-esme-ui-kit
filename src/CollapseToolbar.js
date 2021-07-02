import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';

import Header from './Header';

import Container from './Container';

import EStyleSheet from 'react-native-extended-stylesheet';

import { images } from './resources';

import Image from './Image';

import { BoxShadow } from 'react-native-shadow';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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

const FooterShadowConatiner = (props) => {
  const { footerShadowColor, footerHeight, children } = props;

  const shadowOpt = {
    width: Dimensions.get('window').width,
    height: footerHeight,
    color: footerShadowColor,
    border: 4,
    radius: 1,
    opacity: 0.15,
    x: 0,
    y: -2,
  };

  return (
    <BoxShadow setting={shadowOpt}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
        }}
      >
        {children}
      </View>
    </BoxShadow>
  );
};

class CollapseToolbar extends Component {
  static defaultProps = {
    toolbarIconRight: <View />,
    transToolbarRight: <View />,
    headerTitle: '',
    footer: undefined,
    transToolbar: undefined,
    toolbar: undefined,
    useFooterShadow: false,
    footerShadowColor: '#566E94',
    footerHeight: 80,
    isFloating: false,
    refreshControl: undefined,
    containerStyle: undefined,
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
    const { isFloating, containerStyle } = this.props;

    const contentTop = !isFloating ? this.state.headerHeight : 0;

    return (
      <Container style={containerStyle}>
        <KeyboardAwareScrollView
          onScroll={this._onScroll}
          refreshControl={this.props.refreshControl}
        >
          <View
            style={[
              styles.mainContainer,
              {
                marginTop: contentTop,
              },
            ]}
          >
            {this.props.children}
          </View>
        </KeyboardAwareScrollView>
        {!this.state.isTransHeaderShow && this.renderTransToolbar()}
        {this.state.isTransHeaderShow && this.renderToolbar()}
        {!this.props.useFooterShadow && this.props.footer}
        {this.props.useFooterShadow && this.props.footer !== undefined && (
          <FooterShadowConatiner
            footerShadowColor={this.props.footerShadowColor}
            footerHeight={this.props.footerHeight}
          >
            {this.props.footer}
          </FooterShadowConatiner>
        )}
      </Container>
    );
  }
}

export default CollapseToolbar;
