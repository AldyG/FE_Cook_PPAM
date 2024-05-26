import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const Pay: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Credit Card Number or E-Wallet Please</Text>
    </View>
  );
};

export default Pay;