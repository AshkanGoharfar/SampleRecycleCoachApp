import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HelpScreen from './HelpScreen';
import HomeScreen from './HomeScreen';
import DiscoveryScreen from './DiscoveryScreen';
import ScheduleScreen from './ScheduleScreen'
import LoginScreen from './LoginScreen';


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
const MainScreen = () => {
    return (
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

    )
}

// export default MainScreen

export{HomeScreen, HelpScreen, DiscoveryScreen, ScheduleScreen, MainScreen, LoginScreen};

export default MainScreen