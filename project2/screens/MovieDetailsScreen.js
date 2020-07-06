import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class MovieDetailsScreen extends React.Component {
  state = {
    item: this.props.route.params.item
  }

  componentDidMount(){
    console.log(this.props.route.params.item)
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text>{"Title: " + this.state.item.Title}</Text>
        <Text>{"Type: " + this.state.item.Type}</Text>
        <Text>{"Year: " + this.state.item.Year}</Text>
        <Text>{"imdbID: " + this.state.item.imdbID}</Text>
        {/* <Text>{this.state.item.Poster}</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
