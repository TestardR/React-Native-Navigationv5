import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home', {
            itemId: 12,
            otherParam: 'just the right thing'
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
