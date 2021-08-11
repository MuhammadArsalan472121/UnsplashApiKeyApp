import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HST from '../screens/HstConstruction';
import HstDetail from '../screens/HstDetails';


const screens = {
    HST: {
    screen: HST,
    navigationOptions: {
      headerShown:false,
      // headerStyle: {backgroundColor: '#259'}, this will over ride the property passed through defaultNavigation
    },
    HstDetail:{
        screen: HstDetail,
    }
  },
 
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#259'},
  },
});

export default createAppContainer(HomeStack);
