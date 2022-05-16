import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelpScreen from './Screens/HelpScreen';
import HomeScreen from './Screens/HomeScreen';
import DiscoveryScreen from './Screens/DiscoveryScreen';
import ScheduleScreen from './Screens/ScheduleScreen'
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';
import TrashDetailsScreen from './Screens/TrashDetailsScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} /> */}
        <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  container: {
    // flex: 1
    backgroundColor: '#EEEEEE'
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    margin: 10
  },
  text: {
    textAlign: 'center',
    margin: 10,
    height: 75
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
}); 



export{HomeScreen, HelpScreen, DiscoveryScreen, ScheduleScreen, MainScreen, LoginScreen, TrashDetailsScreen};









