import React from 'react'
import {Button, Text, View} from 'react-native'

export default class MovieDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.getParam('Title'),
    })


    render() {
        return (
            <View>
                <Text>{this.props.navigation.getParam('Title')}</Text>
                <Text>{this.props.navigation.getParam('Type')}</Text>
                <Text>{this.props.navigation.getParam('Year')}</Text>
                <Text>{this.props.navigation.getParam('imdbID')}</Text>
                {/* <Text>{this.props.navigation.getParam('Poster')}</Text> */}
            </View>
        )
    }


}