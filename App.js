import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from "react";
import Movie from "./component/Movie";

export default function App() {

  const [dater, setDater]=useState([]);
  
  const GetRest=async()=>{
    try{
      const response = await fetch( `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
      const json=await response.json();
      return setDater(json.data.movies);
      
    }catch(e){

    }
  }
  useEffect(()=>{

  
    GetRest();
    
  },[])
  
  return (
    <View style={styles.container}>
      {dater.map((e)=>(<Movie id={e.id} key={e.id} title={e.title}/>))}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
