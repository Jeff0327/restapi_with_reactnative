
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState, useEffect} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./component/Home";
import Settings from './component/Settings';
export default function App() {

  const Drawer = createDrawerNavigator();

  return (
      
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
      
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  
});
