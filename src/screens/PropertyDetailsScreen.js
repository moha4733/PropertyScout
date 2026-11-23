import { View, Text, Button } from 'react-native';

export default function PropertyDetailsScreen({ route, navigation }) {
  const { ejendom_id } = route.params;

  return (
    <View>
      <Text>Her kommer ejendommens detaljer</Text>
      <Text>Ejendommens id: {ejendom_id}</Text>

      <Button
        title="Vis interesse"
        onPress={() =>
          navigation.navigate('Contact', {
            ejendom_id: ejendom_id,
          })
        }
      />
    </View>
  );
}