import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Overview from './Overview';
import Todos from './Todos';
import Albums from './Albums';
import Posts from './Posts';
import styles from '../Styles';
import userStyles from '../Styles/user';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {currTab: 0};
  }

  renderTab() {
    const {currTab} = this.state;
    const {user} = this.props.route.params;
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

  render() {
    const {currTab} = this.state;
    const {user} = this.props.route.params;

    const tabs = ['Overview', 'Posts', 'Todos', 'Albums'];
    return (
      <View style={styles.container}>
        <Text style={userStyles.pageTitle}>{user.username}'s Profile</Text>
        <View style={userStyles.tabContainer}>
          {tabs.map((tab, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  userStyles.tabs,
                  currTab === index && userStyles.activeTab,
                ]}
                onPress={() => this.setState({currTab: index})}>
                <Text
                  style={[
                    userStyles.tabTitle,
                    currTab === index && userStyles.activeTitle,
                  ]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={userStyles.tabViewContainer}>{this.renderTab()}</View>
      </View>
    );
  }
}
