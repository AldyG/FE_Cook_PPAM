import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const collection: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Recipe Collection</Text>
    </View>
  );
};

export default collection;