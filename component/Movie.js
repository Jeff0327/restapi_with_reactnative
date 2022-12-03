import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from "react";

export default function Movie({id,title,year,summary}){

    return (
        <View style={{flexDirection:"column"}}>
            <Text>영화제목:{title}</Text>
            <Text>연도:{year}</Text>
            <Text>{summary.slice(1,50)+"..."}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textstyle:{
        flexDirection:"row"
    }
  });