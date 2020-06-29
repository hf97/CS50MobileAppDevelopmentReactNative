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
		timeM: "00",
		timeS: "00",
		isBreakTime: false,
		interval: 0,
		isStart: false,
		type: "Work",
	}
	
	decWork = () => {
		if(this.state.trabSec >= 1){
			this.setState(prevState => ({
				  trabSec: prevState.trabSec - 1,
			}))
			if(this.state.trabSec < 10){
				this.setState({timeS: "0" + this.state.trabSec})
			}
			else{
				this.setState({timeS: this.state.trabSec})
			}
			if(this.state.trabMin < 10){
				this.setState({timeM: "0" + this.state.trabMin})
			}
			else{
				this.setState({timeM: this.state.trabMin})
			}
		}
		else if (this.state.trabMin >= 1){
			this.setState(prevState => ({
				trabMin: prevState.trabMin -1,
				trabSec: 59,
			}))	
			if(this.state.trabMin < 1){
				this.setState({
					timeS: this.state.trabSec,
					timeM: "0" + this.state.trabMin,
				})
			}
			else{
				this.setState({
					timeS: this.state.trabSec,
					timeM: this.state.trabMin,
				})
			}
		}
		else{
			vibrate()
			this.setState({type: "Break"})
			this.setState({
				isBreakTime: false,
			})
		}

	}
	
	decBreak = () => {
		if(this.state.parSec >= 1){
			this.setState(prevState => ({
				parSec: prevState.parSec - 1,
			}))	
			if(this.state.parSec < 10){
				this.setState({timeS: "0" + this.state.parSec})
			}	
			else{
				this.setState({timeS: this.state.parSec})
			}
			if(this.state.parMin < 10){
				this.setState({timeM: "0" + this.state.parMin})
			}
			else{
				this.setState({timeM: this.state.parMin})
			}
		}
		else if (this.state.parMin >= 1){
			this.setState(prevState => ({
				parMin: prevState.parMin -1,
				parSec: 59,
			}))
			if(this.state.parMin < 1){
				this.setState({
					timeS: this.state.parSec,
					timeM: "0" + this.state.parMin,
				})
			}
			else{
				this.setState({
					timeS: this.state.parSec,
					timeM: this.state.parMin,
				})
			}
		}
		else{
			vibrate()
			this.setState({type: "Work"})
			this.setState({
				isBreakTime: true,
			})
		}
	}
	
	dec = () => {
		if(this.state.isBreakTime){
			if(this.state.inputParSec < 10){
				this.setState({timeS: "0" + this.state.inputParSec})
			}
			else{
				this.setState({timeS: this.state.inputParSec})
			}
			if(this.state.inputParMin < 10){
				this.setState({timeM: "0" + this.state.inputParMin})
			}
			else{
				this.setState({timeM: this.state.inputParMin})
			}
			this.decWork(),
			this.setState({
				parMin: Number(this.state.inputParMin),
				parSec: Number(this.state.inputParSec),
			})
		}
		else if (!this.state.isBreakTime){
			if(this.state.inputTrabSec < 10){
				this.setState({timeS: "0" + this.state.inputTrabSec})
			}
			else{
				this.setState({timeS: this.state.inputTrabSec})
			}
			if(this.state.inputTrabMin < 10){
				this.setState({timeM: "0" + this.state.inputTrabMin})
			}
			else{
				this.setState({timeM: this.state.inputTrabMin})
			}
			this.decBreak(),
			this.setState({
				trabMin: Number(this.state.inputTrabMin),
				trabSec: Number(this.state.inputTrabSec),
			})
		}
	}

  	toggleStart = () => {
		this.setState({isStart: true})
		this.state.interval = setInterval(this.dec, 1000)
	}

  	toggleStop = () => {
		this.setState({isStart: false})
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
			timeM: "00",
			timeS: "00",
			isBreakTime: false,
			interval: 0,
			isStart: false,
			type: "Work"
		}))	
	}	
	
	handleInputTrabMin = inputTrabMin => {
		if(+inputTrabMin || inputTrabMin === "" || inputTrabMin === "0"){
			this.setState({inputTrabMin})
		}
	}
	
	handleInputTrabSec = inputTrabSec => {
		if(+inputTrabSec || inputTrabSec === "" || inputTrabSec === "0"){
			this.setState({inputTrabSec})
		}
	}

	handleInputParMin = inputParMin => {
		if(+inputParMin || inputParMin === "" || inputParMin === "0"){
			this.setState({inputParMin})
		}
	}

	handleInputParSec = inputParSec => {
		if(+inputParSec || inputParSec === "" || inputParSec === "0"){
			this.setState({inputParSec})
		}
	}
	
  	render() {
	    return (
      		<View style={styles.container}>
				<Text style = {styles.test}>{this.state.type}</Text>
				<Text style = {styles.test}>{this.state.timeM}:{this.state.timeS}</Text>
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
							style = {styles.input}
							value = {this.state.inputTrabSec}
							maxLength = {2}
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
							maxLength = {2}
							onChangeText = {this.handleInputParSec}
							placeholder = "Stop seconds:"
						/>
					</View>
        		</View>
        		<View style = {styles.row}>
          			<Button title = "Start" onPress = {this.toggleStart} disabled = {this.state.isStart}/>
          			<Button title = "Stop" onPress = {this.toggleStop} disabled = {!this.state.isStart}/>
          			<Button title = "Reset" onPress = {this.toggleReset}/>
        		</View>
      		</View>
    	);
  	}
}