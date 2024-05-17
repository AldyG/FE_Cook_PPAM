import { Slot } from 'expo-router';
import { Text , View } from 'react-native';
import Auth from '../authcon/auth';

interface Prop {
    // prop kalo ada
}

export default function AppLayout(props: Prop) {
    return (
        <Auth>
            <Slot/>
        </Auth>
    );
}