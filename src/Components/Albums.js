import React, {Component} from 'react';
import {ScrollView, Text, View, Button} from 'react-native';

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
    const id = this.props.id;
    this.getAlbums(id);
  }

  render() {
    const {albums} = this.state;
    return (
      <ScrollView>
        <Text>Albums</Text>
        {albums ? (
          albums.map((album, k) => {
            return (
              <View key={k} style={{marginBottom: 10}}>
                <Button
                  title={album.title}
                  onPress={() =>
                    this.props.navigation.navigate('Photos', {
                      id: album.id,
                    })
                  }
                />
              </View>
            );
          })
        ) : (
          <Text>No Albums</Text>
        )}
      </ScrollView>
    );
  }
}
