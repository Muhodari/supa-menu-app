import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/HomePage.js';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';




export default function App() {

// importing the font-family globally
let [fontsLoaded] = useFonts({
  'Source_sans_pro': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
});

if (!fontsLoaded) {
  return <AppLoading />;
}



  return (
    <Homepage />
  );
}

