/*Example of SQLite Database in React Native*/
import React from 'react';
//In Version 2+
//import {createStackNavigator} from 'react-navigation';
//In Version 3+

import {createStackNavigator,
        createAppContainer,
        createBottomTabNavigator} from 'react-navigation';
        
import HomeScreen from './pages/HomeScreen';
import Plus from './pages/Plus';
import Stock from './pages/Stock';
import Del from './pages/Del';
import Edit from './pages/Edit';
import Scan from './pages/Scan';

 
const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: '                    Du-Tu',
      headerStyle: { backgroundColor: '#191970' },
      headerTintColor: '#ffffff',
    },
  },
  Plus: {
    screen: Plus,
    navigationOptions: {
      title: '               +',
      headerStyle: { backgroundColor: '#191970' },
      headerTintColor: '#ffffff',
    },
  },
  Del: {
    screen: Del,
    navigationOptions: {
      title: '            - ',
      headerStyle: { backgroundColor: '#191970' },
      headerTintColor: '#ffffff',
    },
  },
  Edit: {
    screen: Edit,
    navigationOptions: {
      title: '            Edit ',
      headerStyle: { backgroundColor: '#191970' },
      headerTintColor: '#ffffff',
    },
  },
  
});

const App = createBottomTabNavigator({
  Home: { screen: HomeStack },
  Scan: {screen: Scan},
  Stock: {screen: Stock},
},
  
    

);

 


//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);