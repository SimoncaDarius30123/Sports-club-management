import  { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getPlayersPerCoach } from '../services/PlayerService';

export default function PlayerPerCoachScreen({ route , navigation }) {
  const {coachId , coachName} = route.params;
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const data = await getPlayersPerCoach(coachId);
        setPlayers(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPlayers();
  }, [coachId]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{coachName}'s Players</Text>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
           onPress={() => navigation.navigate("PlayerInfo",{playerId:item.id})}
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