import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { register } from '../lib/auth';
import { useRouter } from 'expo-router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await register(email, password);
      router.replace('/(tabs)');
    } catch (error: any) {
      Alert.alert('Fel vid registrering', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🆕 Skapa konto</Text>
      <TextInput
        style={styles.input}
        placeholder="E-post"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Lösenord"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrera</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#f0f8ff'
  },
  title: {
    fontSize: 26, fontWeight: 'bold', marginBottom: 24, textAlign: 'center'
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 16, borderRadius: 8, backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#1DA1F2', padding: 14, borderRadius: 8, alignItems: 'center'
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold', fontSize: 16
  }
});
