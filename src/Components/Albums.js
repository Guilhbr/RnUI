import React, {Component} from 'react';
import {ScrollView, Text, View, Button, TouchableOpacity} from 'react-native';
import styles from '../Styles';

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
      <ScrollView style={{flex: 1}}>
        <Text style={styles.sectionTitle}>Albums</Text>
        <View style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
          {albums ? (
            albums.map((album, k) => {
              return (
                <TouchableOpacity
                  key={k}
                  style={styles.albums}
                  onPress={() =>
                    this.props.navigation.navigate('Photos', {
                      id: album.id,
                    })
                  }>
                  <Text style={styles.tabTitle}>{album.title}</Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text>No Albums</Text>
          )}
        </View>
      </ScrollView>
    );
  }
}
