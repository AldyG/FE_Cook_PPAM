import React from "react";
import { View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { Link, SplashScreen, Tabs } from "expo-router";
import { Pressable, Text } from "react-native";
import { router } from "expo-router";
import { auth } from "../../FirebaseConfig";
  
  export default function TabLayout() {

    auth.onAuthStateChanged((user) => {
        if (!user) {
        router.replace("/login");
        }
    });

    return (
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            height: 63,
            backgroundColor: "#fff"
        }
        }}>
        <Tabs.Screen name="home" options={{
          href: '/home',
          tabBarIcon: ({focused, color, size})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
                <Entypo name="home" color={"#090838"} size={size} />
                <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
              </View>
            )
          }
        }} />
        <Tabs.Screen name="own-recipes" options={{
          href: '/own-recipes',
          tabBarIcon: ({focused, color, size})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
                <Entypo name="open-book" color={"#090838"} size={size} />
                <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
              </View>
            )
          }
        }} />
        <Tabs.Screen name="collection" options={{
          href: '/collection',
          tabBarIcon: ({focused, color, size})=>{
            return(
              <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
                <Entypo name="heart" color={"#090838"} size={size} />
                <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
              </View>
            )
          }
        }} />
        <Tabs.Screen name="profile" options={{
          href: '/profile',
          tabBarIcon: ({focused, color, size})=>{
            return(
              <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
                <Entypo name="user" color={"#090838"} size={size} />
                <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
              </View>
            )
          }
        }} />
      </Tabs>
    );
  }