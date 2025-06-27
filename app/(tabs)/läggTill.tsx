// app/(tabs)/laggTill.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // dropdown
import DateTimePicker from '@react-native-community/datetimepicker';

export default function LaggTill() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('daglig');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    // TODO: Skicka till Firestore eller SQLite
    Alert.alert('Sparat', `Titel: ${title}, Typ: ${category}, Tid: ${date.toLocaleString()}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titel</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="T.ex. Ta medicin"
      />

      <Text style={styles.label}>Kategori</Text>
      <Picker
        selectedValue={category}
        onValueChange={setCategory}
        style={styles.input}
      >
        <Picker.Item label="Daglig rutin" value="daglig" />
        <Picker.Item label="Planner" value="schema" />
        <Picker.Item label="Mediciner" value="medicin" />
        <Picker.Item label="Viktigt" value="viktigt" />
      </Picker>

      <Text style={styles.label}>Tid / Förfallodatum</Text>
      <Button title="Välj tid" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(e, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <View style={{ marginTop: 24 }}>
        <Button title="Spara" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 16, fontWeight: '600', marginTop: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
});
