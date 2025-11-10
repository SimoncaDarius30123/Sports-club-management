import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ManagerScreen({ route, navigation }) {

    const { sportId, sportName } = route.params;

  const choices = [
    { id: '1', name: 'Coaches', target: 'Coaches' },
    { id: '2', name: 'Teams', target: 'Teams' },
  ];

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an option</Text>
      <FlatList
        data={choices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.target,{sportId,sportName})}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop:200,flex: 1, padding: 20 },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 50, textAlign: 'center' },
  item: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  itemText: { color: 'white', fontSize: 18, textAlign: 'center',fontWeight:'bold' },
});
