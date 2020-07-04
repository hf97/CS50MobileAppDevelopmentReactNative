import React from "react";
import { Button, View, TextInput, StyleSheet, Text } from "react-native";

import {fetchMovies} from '../api'

export default class SearchScreen extends React.Component {

  

  handleMovie(text){
    movie = text
  }

  


  render() {
    return (
      <View style={styles.container}>
        <TextInput style = { styles.textInput }
          onChangeText = { (text) => this.handleMovie(text)} 
          placeholder = "Movie"
        />
        <Button title="Search" onPress={() => this.props.navigation.navigate('Result',{"movies": movie})} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: 120,
      marginBottom: 120,
    },
  
    textInput:{
      borderWidth: 1,
      borderColor: "#20232a",
      borderRadius: 6,
      alignItems:"stretch",
      width: 120,
      margin: 10,
      textAlign: "center"
    },
  
  });