import * as React from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Searchbar, RadioButton } from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CardView from 'react-native-cardview'
import { ImageSlider } from "react-native-image-slider-banner";






function DiscoveryScreen({ navigation }) {
    return (
      <ScrollView style={{marginLeft: "3%"}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: "3%", marginRight: "3%", marginTop: "20%"}}>The Discovery Zone</Text>
        <Text style={{fontSize: 17, marginBottom: "30%"}}>We've been taught to recycle. Now it's time to learn to recycle correctly. Re-learn recycling basics and discover which materials are negaticvely affecting your local recycling program's performance.</Text>

        <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: "5%", marginRight: "3%"}}>The Discovery Zone educational features are available to residents in Stage 4 municipalities only.</Text>




<TouchableOpacity style={{backgroundColor: "#00008B", padding: 15, marginRight: "3%", borderRadius: 7}}
  onPress={() => navigation.navigate('Schedule')}
    >
    <Text style = {{color:'white', textAlign: "center", fontSize: 16}}>Tell me more</Text>
    </TouchableOpacity>


    <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: "3%", marginRight: "3%", marginTop: "7%"}}>Blog</Text>

<View style={{marginTop: "5%", marginRight: "3%", marginBottom: "10%"}}>
    <ImageSlider
    data={[
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    onClick={() => navigation.navigate('Schedule')}
    autoPlay={false}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
/>
</View>

      </ScrollView>


    );
  }



export default DiscoveryScreen;