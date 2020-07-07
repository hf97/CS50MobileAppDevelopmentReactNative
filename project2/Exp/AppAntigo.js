import React,  {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, createSwitchNavigator, createAppContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ResultScreen from "./screens/ResultScreenF";
import SearchScreen from "./screens/SearchScreenF";
import PosterScreen from "./screens/PosterScreenF"
import InformationScreen from "./screens/InformationScreenF"


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


export default class App extends React.Component {

tab(){
  return <Tab.Navigator>
    <Tab.Screen name="Poster" component={PosterScreen}/>
    <Tab.Screen name="Information" component={InformationScreen}/>
  </Tab.Navigator>
}


render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
          <Stack.Screen name="Result" component={ResultScreen}/>
          <Stack.Screen name="Home" component={SearchScreen}/>
          <Stack.Screen name="Movie" component={this.tab}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

