import React from 'react';
import { View, Text } from 'react-native';

interface prop {
  // prop halaman
}

const Home: React.FC<prop> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;