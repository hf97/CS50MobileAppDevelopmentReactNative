import 
    import { createContext } from "react"


const Tab = createBottomTabNavigator()

const DEFAULT_CONTEXT = {
    item: {}
}

export const FollowingTabNavigatorContext = createContext(DEFAULT_CONTEXT);

export const tab = ({route}) => {
    const item = route.params;
    return <FollowingTabNavigatorContext.Provider value = {item}>
        <Tab.Nabigator>
            <Tab.Screen name = 'cenas' component = {screen}/>
            <Tab.Screen name = 'cenas' component = {screen}/>
        </Tab.Nabigator>
    </FollowingTabNavigatorContext.Provider>   
}

tab.propTypes = propTypes;
tab.defaultProps = defaultProps;