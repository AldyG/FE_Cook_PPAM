import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const Add: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Add Recipes</Text>
    </View>
  );
};

export default Add;