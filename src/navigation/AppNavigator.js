import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapScreen from '../screens/MapScreen';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: 'PropertyScout' }}
        />

        <Stack.Screen
          name="PropertyDetails"
          component={PropertyDetailsScreen}
          options={{ title: 'Ejendomsdetaljer' }}
        />

        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ title: 'Vis interesse' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}