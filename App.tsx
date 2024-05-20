import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { welcome, login, register, home, own, collection, profile, } from "./screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

function LoggedIn() {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name="Home" component={home} options={{
        tabBarIcon: ({focused, color, size})=>{
          return (
            <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
              <Entypo name="home" color={"#090838"} size={size} />
              <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
            </View>
          )
        }
      }} />
      <Tab.Screen name="Own Recipes" component={own} options={{
        tabBarIcon: ({focused, color, size})=>{
          return (
            <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
              <Entypo name="open-book" color={"#090838"} size={size} />
              <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
            </View>
          )
        }
      }} />
      <Tab.Screen name="Collection" component={collection} options={{
        tabBarIcon: ({focused, color, size})=>{
          return(
            <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
              <Entypo name="heart" color={"#090838"} size={size} />
              <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
            </View>
          )
        }
      }} />
      <Tab.Screen name="Profile" component={profile} options={{
        tabBarIcon: ({focused, color, size})=>{
          return(
            <View style={{alignItems: "center", justifyContent: "center", backgroundColor: focused ? color : "#fff"}}>
              <Entypo name="user" color={"#090838"} size={size} />
              <Entypo name="dot-single" color={focused ? "#090838" : "#fff"} size={4}/>
            </View>
          )
        }
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.landing} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={welcome} />
          <Stack.Screen name="Login" component={login} />
          <Stack.Screen name="Register" component={register} />
          <Stack.Screen name="HomeApp" component={LoggedIn} />
        </Stack.Navigator>
      </NavigationContainer>
      <Entypo name="rocket" size={30} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
