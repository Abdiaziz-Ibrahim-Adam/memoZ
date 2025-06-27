import { View, Text, FlatList, StyleSheet } from 'react-native';

type ViktigtItem = {
  id: string;
  titel: string;
  beskrivning: string;
};

export default function ViktigtLista({ data }: { data: ViktigtItem[] }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.titel}</Text>
          <Text>{item.beskrivning}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  item: {
    backgroundColor: '#eee',
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
