import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { changeText } from '.';

export function Label() {
  const [textValue, setTextValue] = useState('Some text');

  return (
    <View>
      <Text>{textValue}</Text>
      <Button
        title="Change Text"
        onPress={() => {
          changeText('Changed new text', setTextValue);
        }}
      />
    </View>
  );
}
