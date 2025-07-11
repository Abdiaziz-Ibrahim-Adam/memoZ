// lib/storagePreference.ts
import * as SecureStore from 'expo-secure-store';

export async function setStoragePreference(preference: 'firebase' | 'local') {
  await SecureStore.setItemAsync('storagePreference', preference);
}

export async function getStoragePreference(): Promise<'firebase' | 'local'> {
  const value = await SecureStore.getItemAsync('storagePreference');
  return (value as 'firebase' | 'local') ?? 'firebase'; // fallback = firebase
}
