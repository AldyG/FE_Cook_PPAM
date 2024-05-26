import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const prof: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
    </View>
  );
};

export default prof;