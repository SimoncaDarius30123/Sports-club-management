import { useState, useEffect } from "react";
import { View , ActivityIndicator , FlatList , Text , TouchableOpacity , StyleSheet } from "react-native";
import { getSports } from "../services/SportsService";

export default function SportsScreen({ navigation }) {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSportsFromApi() {
      try {
        const data = await getSports();
        setSports(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getSportsFromApi();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a sport</Text>
      <FlatList
        data={sports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Choices', { sportId: item.id, sportName: item.name })}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop:200,flex:1, padding: 20 },       
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 50, textAlign: 'center' },
  item: { backgroundColor: 'black', padding: 15, borderRadius: 8, marginBottom: 20 ,  },
  itemText: { color: 'white', fontSize: 18, textAlign: 'center' , fontWeight:'bold' },
});