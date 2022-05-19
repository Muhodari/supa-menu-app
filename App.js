import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/HomePage.js';


export default function App() {

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

