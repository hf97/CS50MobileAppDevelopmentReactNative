import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class MovieDetailsScreen extends React.Component {
  state = {
    item: this.props.route.params.item
  }
  
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}>{"Title: " + this.state.item.Title}</Text>
        <Text style = {styles.text}>{"Type: " + this.state.item.Type}</Text>
        <Text style = {styles.text}>{"Year: " + this.state.item.Year}</Text>
        <Text style = {styles.text}>{"imdbID: " + this.state.item.imdbID}</Text>
        <Image
          source = {{uri: this.state.item.Poster}}
          style={{width: 400, height: 400}}  
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },

  text: {
    fontSize: 16,
  },
});
