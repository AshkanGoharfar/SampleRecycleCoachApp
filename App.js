import * as React from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Searchbar, RadioButton } from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CardView from 'react-native-cardview'

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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



// const [checked, setChecked] = React.useState('first');

const [value, setValue] = React.useState('first');
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    // <View style={styles.container}>
    <ScrollView>
      {/* <ScrollView> */}
      <View style={{marginLeft: "5%" ,width: "90%", marginTop: "3%" }}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
      <View>
      <Text style={{justifyContent: 'flex-start', textAlign:'left',fontSize:25, fontWeight: 'bold', marginTop: "5%", marginLeft: "5%"}}>Schedule</Text>
      </View>

      <View style={{marginLeft: "5%" ,width: "90%", marginTop: "3%" }}>
      <Calendar
  // Collection of dates that have to be marked. Default = {}
  markedDates={{
    '2022-05-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2022-05-17': {marked: true},
    '2022-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2022-05-19': {disabled: true, disableTouchEvent: true}
  }}
/>

<View>
      <Text style={{justifyContent: 'flex-start', textAlign:'left',fontSize:25, fontWeight: 'bold', marginTop: "5%"}}>We Wanted to Know...</Text>
      </View>

      <View style={{width: "90%", marginTop: "3%", backgroundColor: "white" }}>

      <CardView

            cardElevation={15}
            cardMaxElevation={15}
            cornerRadius={20}
            cornerOverlap={false}
          >



          <Text style={{fontSize: 16, marginLeft: "5%", marginTop: "5%", marginBottom: "7%", marginRight: "5%"}}>
              Do you use your gardening pots and planters year after year?
          </Text>
          <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="Yes, I use them until they are broken" value="first" />
      <RadioButton.Item label="Yes, but only for a few years" value="second" />
      <RadioButton.Item label="No, I get new ones every year" value="third" />
      <RadioButton.Item label="I never garden" value="fourth" />
    </RadioButton.Group>
          {/* <View>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      >
        <Text style={{marginLeft: "5%", marginTop: "3%", marginBottom: "3%", marginRight: "5%"}}>
              Elevation 0
          </Text>
        </RadioButton>
      <RadioButton
        value="second"
        text = "sdasdasdas"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
    </View> */}
</CardView>

</View>
</View>
<View style={{marginBottom: "7%"}}></View>
    </ScrollView>
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