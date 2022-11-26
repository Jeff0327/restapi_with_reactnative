import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Movie from "./Movie";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library, icon } from '@fortawesome/fontawesome-svg-core'
// import { faCamera, faUser } from '@fortawesome/free-solid-svg-icons'

// library.add(faCamera,faUser)
export default function Home({navigation}){
    const [dater, setDater]=useState([]);
    // const camera = icon({ prefix: 'fas', iconName: 'camera' })
    // const user = icon({ prefix: 'fas', iconName: 'user' })
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
        <View style={styles.content}>
        {dater.map((e)=>(<Movie id={e.id} key={e.id} title={e.title}/>))}
        <StatusBar style="auto" />
            
        </View>
        <View style={styles.bottomBar}>
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} style={styles.bottomBtn}>
                <Text>내정보</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtn}>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtn}>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtn}>
                
            </TouchableOpacity>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"pink"
    },
    content:{
        flex:3,
        backgroundColor:"green",
    },
    bottomBar:{
        flex:0.3,
        backgroundColor:"white",
        flexDirection:"row",
      },
      bottomBtn:{
        alignSelf:"center",
        maxWidth:"100%",
        width:"20%",
        marginLeft:"7%",
      },
  });