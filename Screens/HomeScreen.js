// import * as React from 'react';
import { Button, Text, View, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Searchbar, RadioButton } from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CardView from 'react-native-cardview'
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SearchBar } from 'react-native-elements';
import 'localstorage-polyfill'




function HomeScreen({ navigation }) {

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('http://82.115.16.99/trash.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource("");
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title
          : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
    if (text === ""){
      setFilteredDataSource("");
    }
    if (text === "What Goes Where? (e.g. AA batteries)"){
      setFilteredDataSource("");
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.title}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    localStorage.setItem('trash', JSON.stringify(item))
    navigation.navigate('Trash Details')
  };


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
        {/* <Searchbar
        fontSize={14}
        placeholder="What Goes Where? (e.g. AA batteries)"
        onChangeText={onChangeSearch}
        value={searchQuery}
      /> */}

<SearchBar
          round
          
          searchIcon={{ size: 24 }}
          containerStyle={{backgroundColor: 'white'}}
          inputStyle={{backgroundColor: 'back'}}
          fontSize={14}
          lightTheme
          placeholder="What Goes Where? (e.g. AA batteries)"
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}

          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
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
        <View style={{width: "100%", marginTop: "3%", backgroundColor: "white" }}>
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


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#D3D3D3',
    },
    itemStyle: {
      padding: 10,
    },
  });
  
  


  export default HomeScreen;
