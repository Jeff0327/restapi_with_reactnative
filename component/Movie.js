import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from "react";

export default function Movie({id,title}){

    return (
        <View style={{flexDirection:"row"}}>
            
            <Text>{id}:</Text><Text>{title}</Text>
        </View>
    )
}