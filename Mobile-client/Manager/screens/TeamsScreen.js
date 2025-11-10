import  { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { getTeamsAndPlayersAverage } from '../services/TeamsService';

export default function TeamsScreen({ route }) {
  const { sportId, sportName } = route.params;
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const data = await getTeamsAndPlayersAverage(sportId);
        setTeams(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchTeams();
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
      <Text style={styles.title}>{sportName} Teams and Player's Average</Text>
      <FlatList
        data={teams}
        keyExtractor={(item, index) => item?.id?.toString() ?? index.toString()}
        renderItem={({ item }) => (
          <View style={styles.teamItem}>
            <Text style={styles.teamText}>{item.teamName}</Text>
            <Text style={styles.teamText}>AVERAGE : {item.averageAge.toString()}</Text>
          </View>
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
  teamText: { color: 'white', fontSize: 18, textAlign: 'center', fontWeight:'bold' , padding:8 },
});