import {Slot} from 'expo-router';
import { Text , View } from 'react-native';
import AuthProvider from '../utils/auth';

export default function AppLayout(){

    return (
        <AuthProvider>
            <Slot/>
        </AuthProvider>
    )
}