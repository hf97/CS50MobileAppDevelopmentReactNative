import React,  {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, createSwitchNavigator, createAppContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import ResultListScreen from "./screens/ResultListScreen";
import SearchScreen from "./screens/SearchScreen";


const Stack = createStackNavigator()


export default class App extends React.Component {
  state={
    movie:""
  }

  // render() {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator
  //         initialRouteName = "Search"
  //       >
  //         <Stack.Screen
  //           name = "Search"
  //           component = { SearchScreen }
  //         />
  //         <Stack.Screen
  //           name = "Result"
  //           component = { ResultScreen }
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // }


render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
          <Stack.Screen name="Result" component={ResultListScreen}/>
          <Stack.Screen name="Home" component={SearchScreen}/>
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
