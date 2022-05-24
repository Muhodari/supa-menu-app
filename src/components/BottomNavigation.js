import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

// Screens
import Homepage from '../screens/HomePage';





const styles = StyleSheet.create({
  parantTagStyle: {
    position: 'relative',
    position:'fixed'
  },
  footerTagStyle: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
  
  },
})




//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();


export default function BottomNavigation() {
  return (
    <NavigationContainer style={styles.parantTagStyle}>
       <Tab.Navigator
       style={styles}
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={Homepage} style={styles.footerTagStyle} />
        <Tab.Screen name={detailsName} component={Homepage}  style={styles.footerTagStyle}/>
        <Tab.Screen name={settingsName} component={Homepage} style={styles.footerTagStyle}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
