import React from 'react';
import { View, Text } from 'react-native';

export default function Routes() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: '#eee' }}>Hello World</Text>
    </View>
  );
}
