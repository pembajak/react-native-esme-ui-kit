import React from 'react';
import { 
    Platform,
    TouchableWithoutFeedback,
    TouchableNativeFeedback
} from 'react-native';

import { Button as Btn } from 'react-native-elements';

class Button extends React.Component {

    render(){
        var touchComponent = Platform.OS == 'android' && Platform.Version > 21 ?   TouchableNativeFeedback : TouchableWithoutFeedback
        return(<Btn
                TouchableComponent={touchComponent}
             {...this.props} />)
    }

}

export {
    Button
}