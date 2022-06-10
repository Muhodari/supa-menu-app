import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView ,SafeAreaView } from 'react-native';
import Navigator from './src/components/navigation/Navigator.js';
import Homepage from './src/screens/HomePage.js';
import PaymentSuccess from './src/screens/PaymentSuccess.js';
import RateScreen from './src/screens/RatingScreen.js';
import SearchRestaurantPage from './src/screens/SearchRestaurantPage.js';



export default function App() {

  return (

  <NavigationContainer>
    <Navigator/>
  </NavigationContainer>  
    
  );
}

