import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const Register: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Regis ngab</Text>
    </View>
  );
};

export default Register;