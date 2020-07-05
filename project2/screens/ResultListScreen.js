import React from "react";
import { Text, Button, View, TextInput, StyleSheet, SectionList } from "react-native";
import { navigation} from '@react-navigation/native'

import SectionListMovies from '../SectionListMovies'
import {fetchMovies} from '../api'
import { FlatList } from "react-native-gesture-handler";


export default class ResultListScreen extends React.Component {

  // static navigationOptions = ({navigation}) => ({
  //   headerTitle: 'Movies'
  // })

  state = {
    movies: this.getMovies,
  }

  componentDidMount(){
    this.getMovies()
  }


  getMovies = async () => {
    const results = await fetchMovies()
    this.setState({movies: results})
    console.log(this.state.movies)
  }

  handleSelectMovie = movie => {
    // this.props.navigation.navigate('MovieDetailsScreen', {})
    this.props.navigation.push('MovieDetailsScreen', movie)
  }

  render() {

    return (
      <View style={styles.container}>r
        {/* <Text>{this.state.movies.Title}</Text> */}

        <SectionListMovies
          movies = {this.props.screenProps.movies}
          onSelectMovie = {this.handleSelectMovie}
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