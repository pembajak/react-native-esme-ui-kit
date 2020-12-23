import * as React from 'react';

import { Dimensions } from 'react-native';
import { Container, Header } from '@pembajak/react-native-esme-ui-kit';

import EStyleSheet from 'react-native-extended-stylesheet';

const { width, height } = Dimensions;

const styleParam = {
  $rem: width / 411,
  $hrem: height / 823,
};

EStyleSheet.build(styleParam);

export default function App() {
  React.useEffect(() => {}, []);

  return (
    <Container>
      <Header>test</Header>
    </Container>
  );
}
