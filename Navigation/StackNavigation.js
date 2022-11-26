import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../component/Home";
import Profile from "../component/Profile";
import Settings from "../component/Settings";

const Stack = createStackNavigator();
export default function StackNavigation(){
   
    return (
        <Stack.Navigator initialRouteName='Home'>        
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    
  });