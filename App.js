
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { supabase } from './src/services/supabase';

export default function App() {
  const [connectionStatus, setConnectionStatus] = useState(
    'Tester forbindelse til Supabase...'
  );

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from('EJENDOM')
        .select('id')
        .limit(1);

      if (error) {
        console.error('Supabase fejl:', error.message);
        setConnectionStatus(`Supabase fejl: ${error.message}`);
      } else {
        console.log('Supabase forbindelse virker!', data);
        setConnectionStatus('Forbindelse til Supabase virker!');
      }
    }

    testConnection();
  }, []);

  return (
    <View style={styles.container}>
      <AppNavigator />

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{connectionStatus}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusContainer: {
    padding: 10,
    backgroundColor: '#e8f5e9',
  },
  statusText: {
    textAlign: 'center',
    color: '#2e7d32',
    fontWeight: '600',
  },
});
