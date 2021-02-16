import React, { useState, forwardRef, useEffect, useCallback } from 'react';
import { Text, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import RootSiblings from 'react-native-root-siblings';

import moment from 'moment';

const TimePicker = forwardRef((props, ref) => {
  const {
    containerStyle,
    textStyle,
    caretColor = '#C33427',
    caretSize = 10,
    value = undefined,
    onTimeChange = undefined,
  } = props;

  const [time, setTime] = useState(value);
  const [formatedTime, setFormatedTime] = useState(
    moment(new Date()).format('HH:mm')
  );

  let sibling;

  const onInit = function () {
    if (value !== undefined) setFormatedTime(moment(value).format('HH:mm'));
  };

  useEffect(onInit, [onInit]);

  function _addModalTimePicker() {
    sibling = new RootSiblings(
      (
        <DateTimePickerModal
          isVisible={true}
          mode="time"
          date={time}
          onConfirm={(date) => {
            setTime(date);
            setFormatedTime(moment(date).format('HH:mm'));
            onTimeChange && onTimeChange(date);
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
      {time && <Text style={textStyle}>{formatedTime}</Text>}
      {!time && <Text style={textStyle} />}
      <Icon color={caretColor} size={caretSize} name={'caretdown'} />
    </Pressable>
  );
});

export default TimePicker;
