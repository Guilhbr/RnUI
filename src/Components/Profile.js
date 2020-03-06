import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Overview from './Overview';
import Todos from './Todos';
import Albums from './Albums';
import Posts from './Posts';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {}, currTab: 0};
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

  renderTab() {
    const {user, currTab} = this.state;
    switch (currTab) {
      case 0:
        return <Overview user={user} />;
      case 1:
        return <Posts id={user.id} navigation={this.props.navigation} />;
      case 2:
        return <Todos id={user.id} />;
      case 3:
        return <Albums id={user.id} navigation={this.props.navigation} />;
    }
  }

  componentDidMount() {
    const {id} = this.props.route.params;
    this.getUser(id);
  }

  render() {
    const {user} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{user.username}</Text>
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
          <Button
            title="Overview"
            onPress={() => this.setState({currTab: 0})}
          />
          <Button title="Posts" onPress={() => this.setState({currTab: 1})} />
          <Button title="Todos" onPress={() => this.setState({currTab: 2})} />
          <Button title="Albums" onPress={() => this.setState({currTab: 3})} />
        </View>
        {this.renderTab()}
      </View>
    );
  }
}
