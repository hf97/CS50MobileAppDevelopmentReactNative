import React,  {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer} from '@react-navigation/native'
//import {createStackNavigator} from 'react-navigation-stack'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ResultScreen from "./screens/ResultScreen";
import SearchScreen from "./screens/SearchScreen";


const Stack = createStackNavigator()


export default class App extends React.Component {
  state={
    movie:""
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>{ 
          this.state.movie !== "" ? (
            <Stack.Screen name="Result" Component={ResultScreen}/>
          ) : (
            <Stack.Screen name="Home" Component={SearchScreen}/>
          )
        }
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
