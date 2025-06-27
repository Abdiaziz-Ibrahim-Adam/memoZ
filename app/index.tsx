import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function StartSida() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Välkommen till memoZ</Text>
      <Text style={styles.subtitle}>Din personliga hälsoplanerare</Text>

      <Button title="Gå till Schema" onPress={() => router.push('/schema')} />
      <Button title="Välj Lagringsläge" onPress={() => router.push('/inställningar')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
});
