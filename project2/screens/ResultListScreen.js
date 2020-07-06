import React from "react";
import { Button, View,Text, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default class ResultListScreen extends React.Component {

  state={
    movie: []
  }

  fetchMovie(movies){
    try{
      fetch(`http://www.omdbapi.com/?apikey=c05df044&s=${movies}`).then(response => response.json()).then((results)=>{this.setState({movie: results.Search})})
    }
    catch(error){
      console.error(error);
    }
  }

  selectMovie(item){
    this.props.navigation.navigate('MovieDetails', {'item': item})
  }

  render() {
    return (
      <View style = {styles.container}>
        <Button onPress = {()=> this.fetchMovie(this.props.route.params.movie)} title = "Show Movies"/>
        <FlatList 
          data = {this.state.movie}
          keyExtractor = {(item) =>item.imdbID}
          renderItem={({item}) => 
            <TouchableOpacity onPress = {()=>this.selectMovie(item)}>
              <Text>{item.Title}</Text>
            </TouchableOpacity>}
        />
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