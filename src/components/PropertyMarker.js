import { Marker } from 'react-native-maps';

export default function PropertyMarker({ property, onPress }) {
  return (
    <Marker
      identifier={String(property.id)}
      coordinate={{
        latitude: Number(property.breddegrad),
        longitude: Number(property.laengdegrad),
      }}
      title={property.navn || 'Ejendom'}
      description={property.adresse || ''}
      onPress={() => onPress(property.id)}
    />
  );
}