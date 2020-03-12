/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './src/Redux/reducers/';
import Profile from './src/Components/Profile';
import Posts from './src/Components/Posts';
import Albums from './src/Components/Albums';
import Photos from './src/Components/Photos';
import Todos from './src/Components/Todos';
import Post from './src/Components/Post';

const store = createStore(reducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Posts"
              component={Posts}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{title: 'Profile'}}
            />
            <Stack.Screen
              name="Albums"
              component={Albums}
              options={{title: 'Albums'}}
            />
            <Stack.Screen
              name="Photos"
              component={Photos}
              options={{title: 'Photos'}}
            />
            <Stack.Screen
              name="Todos"
              component={Todos}
              options={{title: 'Todos'}}
            />
            <Stack.Screen
              name="Post"
              component={Post}
              options={{title: 'Post'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
