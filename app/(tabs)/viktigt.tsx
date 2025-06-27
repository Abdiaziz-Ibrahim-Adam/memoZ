import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ViktigtForm from '../../components/Viktigt/ViktigtForm';
import ViktigtLista from '../../components/Viktigt/ViktigtLista';

export default function ViktigtScreen() {
  const [data, setData] = useState([]);

  const läggTill = (ny: { titel: string; beskrivning: string }) => {
    const nyPost = { id: Date.now().toString(), ...ny };
    setData((d) => [nyPost, ...d]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Viktiga händelser</Text>
      <ViktigtForm onSubmit={läggTill} />
      <ViktigtLista data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
