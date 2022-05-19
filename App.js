import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/HomePage.js';
import PaymentSuccess from './src/screens/PaymentSuccess.js';
import SearchRestaurantPage from './src/screens/SearchRestaurantPage.js';



export default function App() {

  return (
    // <Homepage />
    // <SearchRestaurantPage/>
    <PaymentSuccess />
  );
}

