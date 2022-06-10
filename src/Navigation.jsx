import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import Menu from './screens/Menu';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      headerMode: 'screen',
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
    />
    <Stack.Screen
      name="Menu"
      component={Menu}
      options={{
        title: 'Menu',
      }}
    />
  </Stack.Navigator>
  )
}