import * as Rntoast from 'react-native-root-toast';

class Toast {
  static show(message) {
    console.log('Rntoast', Rntoast);
    Rntoast.default.show(message);
  }
}

export default Toast;
