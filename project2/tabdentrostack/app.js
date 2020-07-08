import { StackActions } from "react-navigation"



export class TabComponent extends React.Component{

    state = {
        item: {}
    }

    render(){
        return (
        <MyContext.Provider value = {this.props.route.params.item}>
            <Tab.Navigator>
                <Tab.Screen name = 'cenas' component = {screen}/>
                <Tab.Screen name = 'cenas' component = {screen}/>
            </Tab.Navigator>
        </MyContext.Provider>)
    }
}


export default class App extends React.Component{
    render(){
        <Stack.Navigator
            <Stack.Screen name = 'screen' component = {TabComponent}
    }
}

