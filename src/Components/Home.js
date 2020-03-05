import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Posts"
          onPress={() => this.props.navigation.navigate('Posts')}
        />
        <Button
          title="Albums"
          onPress={() => this.props.navigation.navigate('Albums')}
        />
        <Button
          title="Photos"
          onPress={() => this.props.navigation.navigate('Photos')}
        />
        <Button
          title="Todos"
          onPress={() => this.props.navigation.navigate('Todos')}
        />
        <Button
          title="Post"
          onPress={() => this.props.navigation.navigate('Post')}
        />
        <Text>HOME</Text>
      </View>
    );
  }
}
