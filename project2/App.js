import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './screens/SearchScreen';
import ResultListScreen from './screens/ResultListScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';

const Stack = createStackNavigator()

export default class App extends React.Component {
	state={
		movie: null
	}

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName = "Search">
						<Stack.Screen name = "Search" component = {SearchScreen}/>
						<Stack.Screen name = "Result" component = {ResultListScreen}/>
						<Stack.Screen name = "MovieDetails" component = {MovieDetailsScreen}/>
				</Stack.Navigator>
			</NavigationContainer>    
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
