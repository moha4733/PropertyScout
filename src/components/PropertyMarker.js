
import { Marker } from 'react-native-maps';

export default function PropertyMarker({ property, onPress }) {
  return (
    <Marker
      identifier={property.id}
      coordinate={{
        latitude: property.latitude,
        longitude: property.longitude,
      }}
      title={property.name}
      onPress={() => onPress(property.id)}
    />
  );
}
