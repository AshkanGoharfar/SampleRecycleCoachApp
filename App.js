import * as React from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Searchbar, RadioButton } from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import HelpScreen from './Screens/HelpScreen';
import CardView from 'react-native-cardview';
import HomeScreen from './Screens/HomeScreen';
import DiscoveryScreen from './Screens/DiscoveryScreen';
import ScheduleScreen from './Screens/ScheduleScreen'


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Schedule" component={ScheduleScreen} />
    </HomeStack.Navigator>
  );
}

const HelpStack = createNativeStackNavigator();

function HelpStackScreen() {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen name="Help" component={HelpScreen} />
      <HelpStack.Screen name="Schedule" component={ScheduleScreen} />
    </HelpStack.Navigator>
  );
}


const DiscoveryStack = createNativeStackNavigator();

function DiscoveryStackScreen() {
  return (
    <DiscoveryStack.Navigator>
      <DiscoveryStack.Screen name="Discovery" component={DiscoveryScreen} />
      <DiscoveryStack.Screen name="Schedule" component={ScheduleScreen} />
    </DiscoveryStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      // screenOptions={{ headerShown: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Discovery') {
            iconName = focused ? 'ios-flashlight' : 'ios-flashlight-outline';
          } else if (route.name === 'Help') {
            iconName = focused ? 'ios-help-circle' : 'ios-help-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryStackScreen} />
        <Tab.Screen name="Help" component={HelpStackScreen} />
      </Tab.Navigator>
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



export{HomeScreen, HelpScreen, DiscoveryScreen, ScheduleScreen};
