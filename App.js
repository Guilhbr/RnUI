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
import Home from './src/Components/Home';
import Profile from './src/Components/Profile';
import Posts from './src/Components/Posts';
import Albums from './src/Components/Albums';
import Photos from './src/Components/Photos';
import Todos from './src/Components/Todos';
import Post from './src/Components/Post';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{title: 'Profile'}}
          />
          <Stack.Screen
            name="Posts"
            component={Posts}
            options={{title: 'Posts'}}
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
    );
  }
}

export default App;
