import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 33,
            otherParam: 'the only thing'
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
