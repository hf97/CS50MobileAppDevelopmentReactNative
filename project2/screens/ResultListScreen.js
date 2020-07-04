import React from "react";
import { Button, View,Text, TextInput, StyleSheet, SectionList } from "react-native";
import { navigation} from '@react-navigation/native'

import {fetchMovies} from '../api'


export default class ResultListScreen extends React.Component {

  // static navigationOptions = ({navigation}) => ({
  //   headerTitle: 'Movies'
  // })

  state = {
    movies: null,
  }

  componentDidMount(){
    this.getMovies()
  }


  getMovies = async () => {
    const results = await fetchMovies()
    console.log(results)
    this.setState({movies: results})
  }

  handleSelectMovie = movie => {
    // this.props.navigation.navigate('MovieDetailsScreen', {})
    this.props.navigation.push('MovieDetailsScreen', movie)
  }

  render() {

    return (
      <View style={styles.container}>
        <SectionList
          movies = {this.state.movies}
          onSelectMovie={this.handleSelectMovie}
        /* <Text>{console.log(this.navigationOption)}</Text> */
        />
      </View>
    )
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