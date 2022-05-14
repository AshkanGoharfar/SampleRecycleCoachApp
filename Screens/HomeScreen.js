import * as React from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Searchbar, RadioButton } from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CardView from 'react-native-cardview'




function HomeScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
  
    
  
  
  
  
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};
  
  
  
  const [value, setValue] = React.useState('first');
    return (
      <ScrollView>
        {/* <ScrollView> */}
        <View style={{marginLeft: "5%" ,width: "90%", marginTop: "3%" }}>
        <Searchbar
        fontSize={14}
        placeholder="What Goes Where? (e.g. AA batteries)"
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
  </CardView>
  
  </View>
  </View>
  <View style={{marginBottom: "7%"}}></View>
      </ScrollView>
    );
  }
  


  export default HomeScreen;
