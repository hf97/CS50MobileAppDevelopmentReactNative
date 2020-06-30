import React from 'react';
import {vibrate} from './utils'
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class App extends React.Component {
  time=0
  constructor(){
    super()
    this.state={

      breakTimeMin:0,
      breakTimeSec:0,

      workTimeMin: 0,
      workTimeSec:0,

      seconds:0,
      break:false,

      secondsBreak:0,

      isRunning: false,

      type: "Work",
    }
  }
  
  componentDidMount2(){
    this.state.isRunning = true
    if(this.state.seconds == 0){
      this.state.seconds = (+this.state.workTimeMin) + (+this.state.workTimeSec)
    }
    if(this.state.secondsBreak == 0){
      this.state.secondsBreak = (+this.state.breakTimeMin) + (+this.state.breakTimeSec)
    }
    this.interval = setInterval(() => this.startTimer(), 1000)
  }

  componentWillUnmount(){
    this.setState({
      isRunning: false
    })
    clearInterval(this.interval)
  }

  reset(){
    this.state.isRunning = false
    this.state.seconds = (+this.state.workTimeMin) + (+this.state.workTimeSec)
    this.state.secondsBreak = (+this.state.breakTimeMin) + (+this.state.breakTimeSec)
    this.setState({
      whichText: this.state.workInitialTime
    })
    clearInterval(this.interval)
  }

  handleWorkTimeMin(text){
    this.setState({
      workTimeMin: parseInt(text,10) * 60,
    })
  }

  handleWorkTimeSec(text){
    this.setState({
      workTimeSec: text,
      workInitialTimeSec: text,
    }
    )
  }

  handleBreakTimeMin(text){
    this.setState({
      breakTimeMin: (+text) * 60,
    }
    )
  }

  handleBreakTimeSec(text){
    this.setState({
      breakTimeSec: text,
    }
    )
  }

  startTimer(){
    if(this.state.seconds >= 0){
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1
      }))
     }
     if(this.state.seconds<0 && this.state.break === false){
       vibrate()
       this.setState(()=>({
        break: true,
        type: "Break",
        secondsBreak: (+this.state.breakTimeMin) + (+this.state.breakTimeSec)
     }))}

     if(this.state.seconds < 0 && this.state.break === true){
      this.setState((prevState) => ({
        secondsBreak: prevState.secondsBreak - 1
      }))
     }

     if(this.state.secondsBreak < 0 && this.state.break === true){
        vibrate()
        this.setState( () => ({
          break: false,
          type: "Work",
          seconds: (+this.state.workTimeMin) + (+this.state.workTimeSec)
    }))}
  }

  createMin(){
    if(this.state.break === false){
      var m = Math.floor(this.state.seconds % 3600 / 60);
      var s = Math.floor(this.state.seconds % 3600 % 60);

      return ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2)
    }
    else{
      var m = Math.floor(this.state.secondsBreak % 3600 / 60);
      var s = Math.floor(this.state.secondsBreak % 3600 % 60);

      return ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2)
    }
  }


  render() {
    return (
      <View style = {styles.container}>
        <Text style = {{fontSize: 50}}>{this.state.type}</Text>
        <Text style = {{fontSize: 60}}>{this.createMin()}</Text>
        <View style = {{flexDirection: "row"}}>
          <TextInput style = {styles.textInput} onChangeText = {(text)=>this.handleWorkTimeMin(text)} placeholder = "Work minutes"/>
          <TextInput style = {styles.textInput2} onChangeText = {(text)=>this.handleWorkTimeSec(text)} placeholder = "Work seconds"/>
        </View>
        <View style = {{flexDirection: "row"}}>
          <TextInput style = {styles.textInput} onChangeText = {(text) => this.handleBreakTimeMin(text)} placeholder = "Break minutes"/>
          <TextInput style = {styles.textInput2} onChangeText = {(text) => this.handleBreakTimeSec(text)} placeholder = "Break seconds"/>
        </View>
        <View style = {{flexDirection: "row", margin: 10}}>
        <Button title = "Reset" onPress={() => this.reset()} />
        <Button title = "Stop" onPress={() => this.componentWillUnmount()} disabled = {!this.state.isRunning}/>
        <Button title = "Start" onPress={() => this.componentDidMount2()} disabled = {this.state.isRunning}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  textInput2:{
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    alignItems:"flex-end",
    width: 120,
    margin: 10,
    textAlign: "center"
  }
});