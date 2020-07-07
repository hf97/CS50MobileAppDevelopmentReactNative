import React from "react";
import { Button, View, TextInput, StyleSheet, Text, Image } from "react-native";

var movie=""
export default class SearchScreen extends React.Component {
    state={
        item: this.props.route.params.item
    }

  render() {

    return (
      <View style={styles.container}>
          {/* <Button onPress={()=> console.log(this.props.route.params.item)} title="Movie"/> */}
        <Image 
          source={{uri: this.props.navigation.dangerouslyGetParent().getParam('item').Poster}}
          style={{width: 400, height: 400}} 
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
