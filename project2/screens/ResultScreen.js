import React from "react";
import { Button, View,Text, TextInput, StyleSheet } from "react-native";
import { navigation} from '@react-navigation/native'

export default class ResultScreen extends React.Component {
  static navigationOption = ({ navigation }) => {
    return {
      movie: navigation.getParam('movie', null)
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>{movie }</Text>
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