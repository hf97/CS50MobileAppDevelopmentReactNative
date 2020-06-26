import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import {vibrate} from './utils'

const styles = StyleSheet.create({
  	container: {
	    flex: 1,
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: 'black',
		minWidth: 120,
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: 20,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 3,
		textAlign: "center"
	},
  	row: {
	    flexDirection: "row"
	},
	time: {
		fontSize: 78,
	},
});


export default class App extends React.Component {
  	state = {
		time: 1000,
		inputTrabMin: "",
    	inputTrabSec: "",	
		inputParMin: "",
		inputParSec: "",
	}

	dec = () => {
		console.log('increment!')
		this.setState(prevState => ({
		  	time: prevState.time - 1,
		}))
	}

  	toggleStart = () => {
		// const itm = this.state.inputTrabMin
		// const t = "${itm}"
		// this.setState({
		// 	time: "${this.state.inputTrabMin}",
		// })
		setInterval = setInterval(this.dec, 1000)
	  }
	  
	componentWillUnmount() {
		clearInterval(this.interval)
	}

  	toggleStop = () => {

  	}	

  	toggleReset = () => {
    	this.setState(prevState => ({
			time: "00:00",  
			inputTrabMin: "",
			inputTrabSec: "",	
			inputParMin: "",
			inputParSec: "",
		}))
	}
	
	handleInputTrabMin = inputTrabMin => {
		this.setState({inputTrabMin})
	}
	
	handleInputTrabSec = inputTrabSec => {
		this.setState({inputTrabSec})
	}

	handleInputParMin = inputParMin => {
		this.setState({inputParMin})
	}

	handleInputParSec = inputParSec => {
		this.setState({inputParSec})
	}
	
  
  	render() {
	    return (
      		<View style={styles.container}>
        		{/* <View style = {styles.container}> */}
				<Text style = {styles.time}>{this.state.time}</Text>
        		<View>
					<View style = {styles.row}>
						<TextInput 
							keyboardType = "numeric"
							style = {styles.input}
							value = {this.state.inputTrabMin}
							onChangeText = {this.handleInputTrabMin}
							placeholder = "Work minutes:"
						/>
						<TextInput
							keyboardType = "numeric"
							style = {[styles.input]}
							value = {this.state.inputTrabSec}
							onChangeText = {this.handleInputTrabSec}
							placeholder = "Work seconds:"
						/>
					</View>
					<View style = {styles.row}>
						<TextInput 
							keyboardType = "numeric"
							style = {styles.input}
							value = {this.state.inputParMin}
							onChangeText = {this.handleInputParMin}
							placeholder = "Stop minutes:"
						/>
						<TextInput 
							keyboardType = "numeric"
							style = {styles.input}
							value = {this.state.inputParSec}
							onChangeText = {this.handleInputParSec}
							placeholder = "Stop seconds:"
						/>
					</View>
        		</View>
        		<View style = {styles.row}>
          			<Button title = "Start" onPress = {this.toggleStart}/>
          			<Button title = "Stop" onPress = {this.toggleStop}/>
          			<Button title = "Reset" onPress = {this.toggleReset}/>
        		</View>
      		</View>
    	);
  	}
}

