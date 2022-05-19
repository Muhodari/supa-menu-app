import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/HomePage.js';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Switch } from 'react-native-web';
import SignIn from './src/screens/SignIn.js';


export default function App() {

// importing the font-family globally
let [fontsLoaded] = useFonts({
  'Source_sans_pro': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
});

if (!fontsLoaded) {
  return <AppLoading />;
}
  return (
    <>
    <Homepage />
    <SignIn />
    {/* <NativeRouter>
        <Link to="/login" underlayColor="#f0f4f7">
          <Text>SignIn</Text>
        </Link>

        <Route exact path="/login" component={SignIn} />
        <Route exact path="/" component={Homepage}/>
    </NativeRouter></> */}
    </>
  );
}

