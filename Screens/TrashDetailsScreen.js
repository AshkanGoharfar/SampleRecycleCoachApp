import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Searchbar, RadioButton } from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CardView from 'react-native-cardview'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'








function TrashDetailsScreen({ navigation }) {

// const data
const [ trash, setTrash ] = useState([
    {
        title: "",
        image: "",
        description: ""
    }
    ])

useEffect(() => {
    const data = localStorage.getItem('trash');
    if (data){
        console.log(JSON.parse(data).title)
        setTrash(JSON.parse(data));
    }
    }, []);


  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>

        <Text>{trash.title}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

      <Button
          title="Go to Schedule"
          onPress={() => navigation.navigate('SearchBarComponent')}
        />
    </View>
  )
  }
  

export default TrashDetailsScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})