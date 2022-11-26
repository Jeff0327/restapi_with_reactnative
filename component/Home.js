import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Movie from "./Movie";
export default function Home({navigation}){
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
        <View>
        {dater.map((e)=>(<Movie id={e.id} key={e.id} title={e.title}/>))}
        <StatusBar style="auto" />
            
        </View>
        <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.bottomBtn}><Text>친구</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtn}><Text>채팅</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtn}><Text>상점</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtn}><Text>내정보</Text></TouchableOpacity>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomBar:{
        flexDirection:"row",
        
        
        marginBottom:0,
      },
      bottomBtn:{
        
        
      },
  });