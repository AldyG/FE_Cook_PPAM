import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { EdgeInsets, SafeAreaInsetsContext, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [appIsReady, setAppIsReady] = useState(false);

    const [loaded, error] = Font.useFonts({
        DMSans_400Regular,
        DMSans_700Bold,
    });
    
    useEffect(() => {
        async function load(){    
            try{
                await Font.loadAsync(Entypo.font);
            }
            catch(e){
                console.warn(e);
            }
            finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }
        load();
    }, []);
    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded && appIsReady) {
        SplashScreen.hideAsync();
        }
    }, [loaded, appIsReady]);

    if (!loaded || !appIsReady) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor="#87e4fd"/>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaView>
  );
}