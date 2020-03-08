import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Overview from './Overview';
import Todos from './Todos';
import Albums from './Albums';
import Posts from './Posts';
import styles from '../Styles';

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
    const {user, currTab} = this.state;
    const tabs = ['Overview', 'Posts', 'Todos', 'Albums'];
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.pageTitle}>{user.username}'s Profile</Text>
        <View style={styles.tabContainer}>
          {tabs.map((tab, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[styles.tabs, currTab === index && styles.activeTab]}
                onPress={() => this.setState({currTab: index})}>
                <Text
                  style={[
                    styles.tabTitle,
                    currTab === index && styles.activeTitle,
                  ]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{flex: 1, marginTop: 10}}>{this.renderTab()}</View>
      </View>
    );
  }
}
