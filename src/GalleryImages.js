import React, { Component } from 'react';
import { View } from 'react-native';

import Gallery from 'react-native-image-gallery';

import Header from './Header';

class GalleryImages extends Component {
  render() {
    const { navigation, title = 'Photo', accentColor = '#FFFFFF' } = this.props;

    var poster = navigation.getParam('data');
    var images = [];
    poster.map((val, i) => {
      var obj = {};
      obj.source = { uri: val };
      images.push(obj);
    });

    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Gallery
          style={{ flex: 1, backgroundColor: 'black' }}
          images={images}
        />
        <Header
          accentColor={accentColor}
          titleColor={accentColor}
          style={{
            backgroundColor: 'rgb(255,255,255,0.0)',
            position: 'absolute',
            left: 0,
            right: 0,
          }}
          navigation={navigation}
        >
          {title}
        </Header>
      </View>
    );
  }
}

export default GalleryImages;
