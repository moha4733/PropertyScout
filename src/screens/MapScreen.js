import { View, Text, Button } from 'react-native';

export default function MapScreen({ navigation }) {
  return (
    <View>
      <Text>Her kommer Danmarkskortet</Text>

      <Button
        title="Se testejendom"
        onPress={() =>
          navigation.navigate('PropertyDetails', {
            ejendom_id: 'test-1',
          })
        }
      />
    </View>
  );
}