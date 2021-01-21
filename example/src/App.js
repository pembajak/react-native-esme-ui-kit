import * as React from 'react';

import { Dimensions, View, Text } from 'react-native';
import {
  Container,
  Header,
  TimePicker,
  CollapseToolbar,
  DatePicker,
} from '@pembajak/react-native-esme-ui-kit';

import EStyleSheet from 'react-native-extended-stylesheet';

const { width, height } = Dimensions.get('window');

import { RootSiblingParent } from 'react-native-root-siblings';

const styleParam = {
  $rem: width / 411,
  $hrem: height / 823,
};

EStyleSheet.build(styleParam);

export default function App() {
  React.useEffect(() => {}, []);

  return (
    <CollapseToolbar
      useFooterShadow={true}
      footer={
        <View>
          <Text>test</Text>
        </View>
      }
      transToolbar={<Header>TEST TEST</Header>}
      title={'TEST TEST'}
    >
      <View>
        <DatePicker
          containerStyle={{
            padding: 16,
          }}
        />
      </View>

      <RootSiblingParent />
    </CollapseToolbar>
  );
}
