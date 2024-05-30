import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';
import { Home, Own, Collection, Prof, } from "./";

interface tabOpt {
    tabBarShowLabel: boolean;
    headerShown: boolean;
    tabBarStyle: {
      position: 'absolute';
      bottom: number;
      left: number;
      right: number;
      elevation: number;
      height: number;
      background: string;
    };
}
  
const tabOptions: tabOpt = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 63,
        background: "#fff"
    }
}

export default function TabLayout() {
return (
    <Tabs screenOptions={tabOptions}>
      <Tabs.Screen name="Home" options={{
        href: './app/(tabs)/home',
        tabBarIcon: ({focused, color, size})=>{
          return (
            <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
              <Entypo name="home" color={"#090838"} size={size} />
              <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
            </View>
          )
        }
      }} />
      <Tabs.Screen name="Own Recipes" options={{
        href: './app/(tabs)/own-recipes',
        tabBarIcon: ({focused, color, size})=>{
          return (
            <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
              <Entypo name="open-book" color={"#090838"} size={size} />
              <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
            </View>
          )
        }
      }} />
      <Tabs.Screen name="Collection" options={{
        href: './app/(tabs)/collection',
        tabBarIcon: ({focused, color, size})=>{
          return(
            <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
              <Entypo name="heart" color={"#090838"} size={size} />
              <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
            </View>
          )
        }
      }} />
      <Tabs.Screen name="Profile" options={{
        href: './app/(tabs)/profile',
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