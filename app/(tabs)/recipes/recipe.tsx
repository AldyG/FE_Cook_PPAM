import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const Rec: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Recipe Spaghetti Carbonara</Text>
    </View>
  );
};

export default Rec;