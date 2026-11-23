
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import { properties } from '../../data/properties';
import PropertyMarker from '../components/PropertyMarker';

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 56.0,
          longitude: 10.5,
          latitudeDelta: 4.5,
          longitudeDelta: 5.5,
        }}
      >
        {properties.map((property) => (
          <PropertyMarker
            key={property.id}
            property={property}
            onPress={(id) =>
              navigation.navigate('PropertyDetails', {
                ejendom_id: id,
              })
            }
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
