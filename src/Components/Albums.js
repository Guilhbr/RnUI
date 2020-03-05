import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {albums: []};
  }

  getAlbums(userId) {
    try {
      const url = parseInt(userId, 10) ? `?userId=${userId}` : '';
      fetch(`https://jsonplaceholder.typicode.com/albums${url}`)
        .then(response => response.json())
        .then(json => {
          this.setState({albums: json});
        });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const id = this.props.id || 1;
    this.getAlbums(id);
  }

  render() {
    const {albums} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Albums</Text>
        {albums ? (
          albums.map((album, k) => {
            return (
              <View key={k}>
                <Text>{album.title}</Text>
              </View>
            );
          })
        ) : (
          <Text>No Albums</Text>
        )}
      </View>
    );
  }
}
