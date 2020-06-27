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
	test: {
		fontSize: 40,
	}
});


export default class App extends React.Component {
  	state = {
		inputTrabMin: "",
    	inputTrabSec: "",	
		inputParMin: "",
		inputParSec: "",
		trabMin: 0,
		trabSec: 0,
		parMin: 0,
		parSec: 0,
		isBreakTime: false,
		interval: 0,
	}

	decWork = () => {
		if(this.state.trabSec >= 1){
			this.setState(prevState => ({
				  trabSec: prevState.trabSec - 1,
			}))	
		}
		else if (this.state.trabMin >= 1){
			this.setState(prevState => ({
				trabMin: prevState.trabMin -1,
				trabSec: 59,
			}))	
		}
		else{
			this.setState({isBreakTime: false})
		}

	}
	
	decBreak = () => {
		if(this.state.parSec >= 1){
			this.setState(prevState => ({
				parSec: prevState.parSec - 1,
			}))	
		}
		else if (this.state.parMin >= 1){
			this.setState(prevState => ({
				parMin: prevState.parMin -1,
				parSec: 59,
			}))	
		}
		else{
			this.setState({isBreakTime: true})
		}
	}
	
	dec = () => {
		if(this.state.isBreakTime){
			this.decWork(),
			this.setState({
				parMin: Number(this.state.inputParMin),
				parSec: Number(this.state.inputParSec)
			})
		}
		else if (!this.state.isBreakTime){
			this.decBreak(),
			this.setState({
				trabMin: Number(this.state.inputTrabMin),
				trabSec: Number(this.state.inputTrabSec)
			})
		}
	}

  	toggleStart = () => {
		this.state.interval = setInterval(this.dec, 1000)
	}

  	toggleStop = () => {
		clearInterval(this.state.interval)
  	}	

  	toggleReset = () => {
		clearInterval(this.state.interval)
		this.setState(prevState => ({
			inputTrabMin: "",
			inputTrabSec: "",	
			inputParMin: "",
			inputParSec: "",
			trabMin: 0,
			trabSec: 0,
			parMin: 0,
			parSec: 0,
			isBreakTime: false,
			interval: 0,
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
				<Text style = {styles.test}>Work = {this.state.trabMin}:{this.state.trabSec}</Text>
				<Text style = {styles.test}>Break = {this.state.parMin}:{this.state.parSec}</Text>
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

