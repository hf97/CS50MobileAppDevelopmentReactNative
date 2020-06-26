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
	font: {
		fontSize: 78,
	},
});


export default class App extends React.Component {
  	state = {
		inputTrabMin: "",
    	inputTrabSec: "",	
		inputParMin: "",
		inputParSec: "",
		isWorkTime: true,
		timeWork: 0,
		interval: 0,
	}

	decWork = () => {
		if(this.state.inputTrabSec >= 1){
			this.setState(prevState => ({
				  inputTrabSec: prevState.inputTrabSec - 1,
			}))	
		}
		else if (this.state.inputTrabMin >= 1){
			this.setState(prevState => ({
				inputTrabMin: prevState.inputTrabMin -1,
				inputTrabSec: 59,
			}))	
		}
		else{
			this.setState({isWorkTime: false})
			console.log(this.state.isWorkTime)
		}

	}
	
	decBreak = () => {
		if(this.state.inputParSec >= 1){
			this.setState(prevState => ({
				inputParSec: prevState.inputParSec - 1,
			}))	
		}
		else if (this.state.inputParMin >= 1){
			this.setState(prevState => ({
				inputParMin: prevState.inputParMin -1,
				inputParSec: 59,
			}))	
		}
		else{
			this.setState({isWorkTime: true})
			console.log(this.state.isWorkTime)
		}
	}
	
	dec = () => {
		if(this.state.isWorkTime){
			this.decWork()
		}
		else{
			this.decBreak()
		}
	}

  	toggleStart = () => {
		this.state.interval = setInterval(this.dec, 1000)
	}

  	toggleStop = () => {
		clearInterval(this.state.interval)
  	}	

  	toggleReset = () => {
    	this.setState(prevState => ({
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
				<Text style = {styles.font}>{this.state.inputTrabMin}:{this.state.inputTrabSec}</Text>
        		<View>
					<View style = {styles.row}>
						<TextInput 
							keyboardType = "numeric"
							style = {styles.input}
							value = {String(this.state.inputTrabMin)}
							onChangeText = {this.handleInputTrabMin}
							placeholder = "Work minutes:"
						/>
						<TextInput
							keyboardType = "numeric"
							style = {styles.input}
							value = {String(this.state.inputTrabSec)}
							onChangeText = {this.handleInputTrabSec}
							placeholder = "Work seconds:"
						/>
					</View>
					<View style = {styles.row}>
						<TextInput 
							keyboardType = "numeric"
							style = {styles.input}
							value = {String(this.state.inputParMin)}
							onChangeText = {this.handleInputParMin}
							placeholder = "Stop minutes:"
						/>
						<TextInput 
							keyboardType = "numeric"
							style = {styles.input}
							value = {String(this.state.inputParSec)}
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

