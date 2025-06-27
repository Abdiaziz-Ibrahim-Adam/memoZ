import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

type Props = {
  onSubmit: (data: { titel: string; beskrivning: string }) => void;
};

export default function ViktigtForm({ onSubmit }: Props) {
  const [titel, setTitel] = useState('');
  const [beskrivning, setBeskrivning] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Titel (t.ex. Läkarbesök)"
        style={styles.input}
        value={titel}
        onChangeText={setTitel}
      />
      <TextInput
        placeholder="Beskrivning eller datum"
        style={styles.input}
        value={beskrivning}
        onChangeText={setBeskrivning}
      />
      <Button title="Lägg till" onPress={() => {
        onSubmit({ titel, beskrivning });
        setTitel('');
        setBeskrivning('');
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});
