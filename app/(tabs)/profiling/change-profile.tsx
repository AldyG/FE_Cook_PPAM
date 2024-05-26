import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const Change: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Change Profile</Text>
    </View>
  );
};

export default Change;