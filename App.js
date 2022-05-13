import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Searchbar } from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function DetailsScreen() {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);




  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <ScrollView> */}
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      <View>
      <Text style={{justifyContent: 'flex-start', textAlign:'left',fontSize:30}}>Schedule</Text>
      </View>

      <View style={{ flex: 1, width: "90%" }}>
      <Calendar
  // Collection of dates that have to be marked. Default = {}
  markedDates={{
    '2022-05-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2022-05-17': {marked: true},
    '2022-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2022-05-19': {disabled: true, disableTouchEvent: true}
  }}
/>
</View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      {/* </ScrollView> */}
    </View>
  );
}

function HelpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Help screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      
    </View>
  );
}


function DiscoveryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Help screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      {/* <HomeStack.Screen name="Help" component={HelpScreen} />
      <HomeStack.Screen name="Discovery" component={DiscoveryScreen} /> */}
    </HomeStack.Navigator>
  );
}

const HelpStack = createNativeStackNavigator();

function HelpStackScreen() {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen name="Help" component={HelpScreen} />
      <HelpStack.Screen name="Details" component={DetailsScreen} />
      {/* <HelpStack.Screen name="Discovery" component={DiscoveryScreen} />
      <HelpStack.Screen name="Home" component={HomeScreen} /> */}
    </HelpStack.Navigator>
  );
}


const DiscoveryStack = createNativeStackNavigator();

function DiscoveryStackScreen() {
  return (
    <DiscoveryStack.Navigator>
      <DiscoveryStack.Screen name="Discovery" component={DiscoveryScreen} />
      <DiscoveryStack.Screen name="Details" component={DetailsScreen} />
      {/* <DiscoveryStack.Screen name="Help" component={HelpScreen} /> */}
      {/* <DiscoveryStack.Screen name="Home" component={HomeScreen} /> */}
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