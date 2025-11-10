import  { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { getPlayerById } from '../services/PlayerService';

export default function PlayerInfoScreen({ route }) {
  const {playerId} = route.params;
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPlayerDataFromApi() {
      try {
        const data = await getPlayerById(playerId);
        setPlayer(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getPlayerDataFromApi();
  },[]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player's Informations</Text>
      <Text style={styles.item}>Name : {player.name}</Text>
      <Text style={styles.item}>Position : {player.position}</Text>
      <Text style={styles.item}>Age : {player.age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop:200,flex: 1, padding: 20,alignItems:'center' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 50, textAlign: 'center' },
  item:{fontSize:17,marginBottom:10,fontWeight:'bold'}
});