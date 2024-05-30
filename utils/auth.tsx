import React, { useState, useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import * as crypt from "expo-crypto";
import db from './db'

// Interface to define the AuthContext value type
interface AuthVal {
  isLoggedIn: boolean;
  user?: typeof firestore | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
}

const AuthContext = React.createContext<AuthVal>({
  isLoggedIn: false,
  user: null,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
});

export const useAuth = (): AuthVal => {
  return useContext(AuthContext);
};

export default function Auth({ children }: { children: React.ReactNode }): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<typeof firestore | null>(null); 

  // Handle user state changes
  function onStateChange(user: typeof firestore | null) { 
    // console.log("onStateChange", user);
    setUser(user);
    setIsLoggedIn(!!user); 

    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // Fetch user data if logged in
          const userDoc = await firestore().collection('Users').doc(user.email).get();
          setUser(userDoc.exists ? userDoc.data() as typeof firestore : null);
        } else {
          setUser(null);
        }
        setIsLoggedIn(!!user);
        setInitializing(false);
      } catch (error) {
        // console.error('Auth state change error:', error);
      }
    });
  
    return subscriber; // unsubscribe on unmount
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Sign in error:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };
  
  const signUp = async (email: string, password: string) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Sign up error:', error);
      // Handle errors appropriately
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Sign out error:', error);
      // Handle errors appropriately
    }
  };

  console.log("user", user);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        signIn,
        signOut,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
