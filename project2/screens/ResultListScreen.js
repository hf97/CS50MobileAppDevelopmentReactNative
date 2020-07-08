import React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default class ResultListScreen extends React.Component {

  state={
    movie: [],
    page: 1,
  }

  componentDidMount(){
    this.fetchMovie(this.props.route.params.movie)
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
        {/* <Button onPress = {()=> this.fetchMovie(this.props.route.params.movie)} title = "Show Movies"/> */}
        <Text>{"Number of results: " + this.state.movie.length}</Text>
        <FlatList 
          data = {this.state.movie}
          keyExtractor = {(item) =>item.imdbID}
          renderItem={({item}) => 
            <TouchableOpacity onPress = {()=>this.selectMovie(item)}>
              <View style = {styles.entry}>
                <Image
                  source = {{uri: item.Poster}}
                  style={{width: 40, height: 40}}  
                />
                <Text style = {styles.text}>{item.Title}</Text>
              </View>
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
    marginTop: 20,
    // marginBottom: 120,
    // fontSize: 0,
  },

  text: {
    fontSize: 17,
    maxWidth: 320,
  },

  entry: {
    flexDirection: 'row',
    borderWidth: 0.4,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 6,
    width: 370,
    // flexWrap: 'wrap',

  }
});