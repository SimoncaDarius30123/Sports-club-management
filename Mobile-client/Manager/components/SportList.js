import { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { getSports } from '../services/SportService';

const SportList = () => {
  const [sports,setSports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () =>{
    getSportsFromApi();
  } , [] );


  const getSportsFromApi = async () => {
    try{
      const data = await getSports();
      setSports(data);
    } catch(error){
      console.log(error);
    } finally{
      setLoading(false);
    }
  }

  if(loading){
  return (
      <View style={style.loadingIcon}>
        <ActivityIndicator size='large'/>
      </View>
    );
  }

  return (
    <FlatList
      data={sports}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Teams',{sportId : item.id})} >
          <Text style={style.container} >{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );

}
export default SportList;

const style = StyleSheet.create({
  loadingIcon: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'red'
  },

  container:{
    width:"100%",
    backgroundColor:"blue",
    marginBottom:20
  }
})