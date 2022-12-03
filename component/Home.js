import React,{useState,useEffect,useRef } from "react";
import { StyleSheet, Text, View,TouchableOpacity,Card,CardItem } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Movie from "./Movie";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Home({navigation}){
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
    const [dater, setDater]=useState([]);
    
    const GetRest=async()=>{
      try{
        const response = await fetch( `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
        const json=await response.json();
        return setDater(json.data.movies);
        
      }catch(e){
  
      }
    }
    
    useEffect(() => {
      GetRest();
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
        
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);
    async function schedulePushNotification() {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "You've got mail! 📬",
          body: 'Here is the notification body',
          data: { data: 'goes here' },
        },
        trigger: { seconds: 2 },
      });
    }
    
    async function registerForPushNotificationsAsync() {
      let token;
    
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    
      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
      } else {
        alert('Must use physical device for Push Notifications');
      }
    
      return token;
    }
    return (
    <View style={styles.container}>
        <View style={styles.content}>
        {dater.map((e)=>(<Movie 
        id={e.id} 
        key={e.id} 
        title={e.title} 
        year={e.year}
        summary={e.summary}
        />))}
        
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
        backgroundColor:"white",
    },
    bottomBar:{
        flex:0.3,
        backgroundColor:"pink",
        flexDirection:"row",
      },
      bottomBtn:{
        alignSelf:"center",
        maxWidth:"100%",
        width:"20%",
        marginLeft:"7%",
        
      },
  });