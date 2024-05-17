import React, { useState, createContext, useContext, ReactNode } from "react";

interface AuthVal {
    isLoggedIn: boolean;
    signIn: () => void;
    signOut: () => void;
}

// @ts-ignore
// ini masih lom fix
const AuthContext = React.createContext<AuthVal>();

export function useAuth(): AuthVal{
    return useContext(AuthContext);
}

export default function Auth({ children }: React.PropsWithChildren<{}>){
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const signIn = (): void =>{
        setIsLoggedIn(true);
    }

    const signOut = (): void =>{
        setIsLoggedIn(false);
    }

    const value: AuthVal = {
        isLoggedIn,
        signIn,
        signOut,
      };

      return (
        <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
      );
}