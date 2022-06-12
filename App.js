import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/HomePage.js';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import SignIn from './src/screens/SignIn.js';
import CheckOut from './src/screens/CheckOut.js';


export default function App() {

  return (
    <>
    {/* <Homepage /> */}
    {/* <SignIn /> */}
    <CheckOut />
    </>
  );
}

