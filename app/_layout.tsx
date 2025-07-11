import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function RootLayout() {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isInTabs = segments[0] === '(tabs)';
      if (!user && isInTabs) {
        router.replace('/');
      }
    });

    return unsubscribe;
  }, []);

  return <Slot />;
}
