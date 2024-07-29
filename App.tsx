import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import list from './app/screen/list';
import details from './app/screen/details';
import login from './app/screen/login';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './firebaseConfig';



const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="List" component={list} options={{headerShown:true}}></InsideStack.Screen>
      <InsideStack.Screen name="Details" component={details} options={{headerShown:true}} ></InsideStack.Screen>
    </InsideStack.Navigator>
  )
}


export default function App() {
  const [user,setUser] = useState<User|null>(null)


useEffect(()=>{
  onAuthStateChanged(FIREBASE_AUTH,(user)=>{
    console.log('user',user)
    setUser(user);
  });
},[]);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} options={{headerShown:false}}></Stack.Screen>
        ):(
          <Stack.Screen name="Login" component={login} options={{headerShown:false}}/>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}


