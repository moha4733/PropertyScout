
import { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import MapView from 'react-native-maps';

import { getProperties } from '../services/properties';
import PropertyMarker from '../components/PropertyMarker';

export default function MapScreen({ navigation }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProperties = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      console.log('Starter hentning af ejendomme fra Supabase...');

      const data = await getProperties();

      console.log('Ejendomme hentet:', data);

      setProperties(data);
    } catch (err) {
      console.error('Fuld fejl ved hentning af ejendomme:', err);
      console.error('Fejlens stack:', err?.stack);

      setError(
        'Ejendommene kunne ikke hentes. Kontrollér din internetforbindelse, og prøv igen.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProperties();
  }, [loadProperties]);

  const validProperties = properties.filter((property) => {
    if (
      property.breddegrad === null ||
      property.breddegrad === undefined ||
      property.breddegrad === '' ||
      property.laengdegrad === null ||
      property.laengdegrad === undefined ||
      property.laengdegrad === ''
    ) {
      return false;
    }

    const latitude = Number(property.breddegrad);
    const longitude = Number(property.laengdegrad);

    return (
      Number.isFinite(latitude) &&
      Number.isFinite(longitude) &&
      latitude >= -90 &&
      latitude <= 90 &&
      longitude >= -180 &&
      longitude <= 180
    );
  });

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
        {validProperties.map((property) => (
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

      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#2563eb" />
          <Text style={styles.message}>Henter ejendomme...</Text>
        </View>
      )}

      {!loading && error && (
        <View style={styles.overlay}>
          <Text style={styles.title}>Noget gik galt</Text>
          <Text style={styles.message}>{error}</Text>

          <Pressable style={styles.button} onPress={loadProperties}>
            <Text style={styles.buttonText}>Prøv igen</Text>
          </Pressable>
        </View>
      )}

      {!loading && !error && validProperties.length === 0 && (
        <View style={styles.overlay}>
          <Text style={styles.title}>Ingen ejendomme endnu</Text>

          <Text style={styles.message}>
            Der er endnu ikke registreret ejendomme med gyldige koordinater.
          </Text>

          <Pressable style={styles.button} onPress={loadProperties}>
            <Text style={styles.buttonText}>Opdater</Text>
          </Pressable>
        </View>
      )}
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
  overlay: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    color: '#444',
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
