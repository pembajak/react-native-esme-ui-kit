import React from 'react';
import { Platform } from 'react-native';

import { Input as Inpt } from 'react-native-elements';

class Input extends React.Component {
  render() {
    return <Inpt borderColor="transparent" {...this.props} />;
  }
}

export default Input
