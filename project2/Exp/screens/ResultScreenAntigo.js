import React from "react";
import { Button, View,Text, TextInput, StyleSheet, SectionList } from "react-native";
import { ScrollView, FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default class ResultScreen extends React.Component {

  
  state={
    movie: []
  }
  
  
  fetchMovie(movies){
    try{
      // console.log(movies)
      // fetch(`http://www.omdbapi.com/?apikey=c05df044&s=${movies}`).then(response => response.json()).then((results)=>{console.log(results.Search)})
      fetch(`http://www.omdbapi.com/?apikey=c05df044&s=${movies}`).then(response => response.json()).then((results)=>{this.setState({movie: results.Search})})
    }
    catch(error){
      console.error(error);
      
    }
  }


  selectMovie(item){
    this.props.navigation.navigate("Movie",{screen: "Movie",params:{"item": item}})
  }

  


  render() {

    // const Item = ({ title }) => (
    //   <View>
    //     <Text>{title}</Text>
    //   </View>
    // );

    return (
      <View style={styles.container}>
        <Button onPress={()=> this.fetchMovie(this.props.route.params.movie)} title="Movie"/>
        {/* <Button onPress={()=> this.fetchMovie(this.state.movie)} title="Movie2"/> */}
        <FlatList 
        data={this.state.movie}
        keyExtractor={(item) =>item.imdbID}
        renderItem={( {item} ) => <TouchableOpacity onPress={()=>this.selectMovie(item)}>
          <Text>{item.Title}</Text>
          </TouchableOpacity>}/>
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