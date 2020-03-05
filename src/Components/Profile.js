import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Profile extends Component {
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
    const id = this.props.id || 1;
    this.getUser(id);
  }

  render() {
    const {user} = this.state;
    const address = user.address;
    const company = user.company;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>{user.username}</Text>
        <View>
          <Text>Personal Info</Text>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
          <Text>{user.phone}</Text>
          <Text>{user.website}</Text>
        </View>
        {address && (
          <View>
            <Text>Address</Text>
            <Text>{address.city}</Text>
            <Text>{address.street}</Text>
            <Text>{address.suite}</Text>
            <Text>{address.zipcode}</Text>
            <Text>
              Long: {address.geo.lng}; Lat: {address.geo.lat}
            </Text>
          </View>
        )}
        {company && (
          <View>
            <Text>Company</Text>
            <Text>{company.name}</Text>
            <Text>{company.catchPhrase}</Text>
            <Text>{company.bs}</Text>
          </View>
        )}
      </View>
    );
  }
}
