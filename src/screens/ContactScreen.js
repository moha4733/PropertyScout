import { View, Text } from 'react-native';

export default function ContactScreen({ route }) {
  const { ejendom_id } = route.params;

  return (
    <View>
      <Text>Her kommer interesseformularen</Text>
      <Text>Du viser interesse for ejendom: {ejendom_id}</Text>
    </View>
  );
}