import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const rev: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Your Recipes</Text>
    </View>
  );
};

export default rev;