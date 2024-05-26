import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const Welcome: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;