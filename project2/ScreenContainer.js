import SearchScreen from "./screens/SearchScreen";
import {createSwitchNavigator,createAppContainer} from 'react-navigation'

const AppNavigator = createSwitchNavigator({
    Search: SearchScreen,
    //Main: MainTabs
  });
const switchContainer = createAppContainer(AppNavigator);

export default switchContainer