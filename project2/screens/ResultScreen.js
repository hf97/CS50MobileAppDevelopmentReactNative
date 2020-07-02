import React from "react";
import { Button, View,Text, TextInput, StyleSheet } from "react-native";
import { navigation} from '@react-navigation/native'

export default class ResultScreen extends React.Component {
  navigationOption () {
    movies = fetch("http://www.omdbapi.com/?apikey=c05df044&s=rings").then(response => response.json()).then(({movies}) => { console.log(movies)})     //navigation.getParam('movie', null)
    //console.log(movies)
  }

  // Promise {
  //   "_40": 0,
  //   "_55": null,
  //   "_65": 0,
  //   "_72": null,
  // }

  processContact = movie => ({
    title: movie.Title
  })


  fetchMovie = async () => {
    const response = await fetch("http://www.omdbapi.com/?apikey=c05df044&s=rings")
    const {results} = await response.json()
    return results.map(processMovie)
  }


  render() {

    return (
      <View style={styles.container}>
        <Text>{this.fetchMovie}</Text>
        {/* <Text>{console.log(this.navigationOption)}</Text> */}
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