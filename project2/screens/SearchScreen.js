import React from "react";
import { Button, View, TextInput, StyleSheet } from "react-native";

export default class SearchScreen extends React.Component {

	state = {
		movie: ''
	}

	handleMovie(text){
		this.setState({movie: text})
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput style = { styles.textInput }
					onChangeText = { (text) => this.handleMovie(text)} 
					placeholder = "Movie"
				/>
				<Button title="Search" onPress={() => this.props.navigation.navigate('Result', {'movie': this.state.movie})} />
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
		fontSize: 30,
		width: 300,
		height: 50,
		margin: 10,
		textAlign: "center"
	},	
});