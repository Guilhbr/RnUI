import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {}};
  }

  getUser(userId) {
    try {
      const url = parseInt(userId, 10) ? `?id=${userId}` : '';
      fetch(`https://jsonplaceholder.typicode.com/users${url}`)
        .then(response => response.json())
        .then(json => {
          this.setState({user: json[0]});
        });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const id = this.props.id;
    this.getUser(id);
  }

  render() {
    const {user} = this.state;
    const username = user.username || '';
    return (
      <View>
        <Button
          title={username}
          onPress={() =>
            this.props.navigation.push('Profile', {id: this.props.id})
          }
        />
      </View>
    );
  }
}
