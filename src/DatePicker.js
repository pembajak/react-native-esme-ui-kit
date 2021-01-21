import React, { useState, forwardRef } from 'react';

import { Text, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import RootSiblings from 'react-native-root-siblings';

import moment from 'moment';

const DatePicker = forwardRef((props, ref) => {
  const {
    containerStyle,
    textStyle,
    caretColor = '#C33427',
    caretSize = 10,
    format = 'dd MMM YYYY',
  } = props;

  const [time, setTime] = useState(new Date());
  const [formatedTime, setFormatedTime] = useState(
    moment(new Date()).format(format)
  );
  let sibling;

  function _addModalTimePicker() {
    sibling = new RootSiblings(
      (
        <DateTimePickerModal
          isVisible={true}
          mode="date"
          date={time}
          onConfirm={(date) => {
            setTime(date);
            setFormatedTime(moment(date).format(format));
            sibling && sibling.destroy();
          }}
          onCancel={() => {
            sibling && sibling.destroy();
          }}
        />
      )
    );
  }

  return (
    <Pressable
      onPress={() => {
        _addModalTimePicker();
      }}
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        containerStyle,
      ]}
    >
      <Text style={textStyle}>{formatedTime}</Text>
      <Icon color={caretColor} size={caretSize} name={'caretdown'} />
    </Pressable>
  );
});

export default DatePicker;
