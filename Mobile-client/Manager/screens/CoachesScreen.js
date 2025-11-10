import  { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getCoachesBySportId } from '../services/CoachService';

export default function TeamsScreen({ route , navigation }) {
  const { sportId, sportName } = route.params;
  const [coaches, setCoaches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCoaches() {
      try {
        const data = await getCoachesBySportId(sportId);
        setCoaches(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCoaches();
  }, [sportId]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sportName} Coaches</Text>
      <FlatList
        data={coaches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
          onPress={() => navigation.navigate('PlayersPerCoach',{coachId: item.id , coachName:item.name})}
          style={styles.teamItem}>
            <Text style={styles.teamText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop:200,flex: 1, padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 50, textAlign: 'center' },
  teamItem: { backgroundColor: 'black', padding: 15, borderRadius: 8, marginBottom: 20 },
  teamText: { color: 'white', fontSize: 18, textAlign: 'center', fontWeight:'bold' },
});