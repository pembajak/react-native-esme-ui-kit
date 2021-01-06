import React, { Component } from 'react';
import { View } from 'react-native';

import Gallery from 'react-native-image-gallery';

import { Header } from './Header';

class GalleryImages extends Component {
  render() {
    const { navigation } = this.props;

    var poster = navigation.getParam('data');

    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Gallery
          style={{ flex: 1, backgroundColor: 'black' }}
          images={poster}
        />
        <Header
          style={{
            backgroundColor: 'rgb(255,255,255,0.0)',
            position: 'absolute',
            left: 0,
            right: 0,
          }}
          navigation={navigation}
        />
      </View>
    );
  }
}

export default GalleryImages;
