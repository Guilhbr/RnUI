import React, {Component} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import styles from '../Styles';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {photos: []};
  }

  getPhotos(id) {
    try {
      const url = id ? `?albumId=${id}` : '';
      fetch(`https://jsonplaceholder.typicode.com/photos${url}`)
        .then(response => response.json())
        .then(json => {
          this.setState({photos: json});
        });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const {id} = this.props.route.params;
    this.getPhotos(id);
  }

  render() {
    const {photos} = this.state;
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.albumContainer}>
          {photos ? (
            photos.map((photo, k) => {
              return (
                <View key={k} style={styles.photo}>
                  <Image style={{flex: 1}} source={{uri: photo.thumbnailUrl}} />
                  {/* <Text>{photo.title}</Text> */}
                </View>
              );
            })
          ) : (
            <Text>No Photos</Text>
          )}
        </View>
      </ScrollView>
    );
  }
}
