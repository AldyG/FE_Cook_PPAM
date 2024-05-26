import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const browse: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Browse</Text>
    </View>
  );
};

export default browse;