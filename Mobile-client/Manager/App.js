import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context'
import SportList from './components/SportList';
import { View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Choose a sport</Text>
        <SportList/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex:1,
    
  },
  
  content:{
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginTop:"100%",
  },

  title: { 
    fontSize: 35, 
    fontWeight: 'bold',
    marginBottom: 30 
    },
  
 
});
