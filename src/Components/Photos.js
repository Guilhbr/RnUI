import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {photos: []};
  }

  getPhotos(albumId) {
    try {
      const url = parseInt(albumId, 10) ? `?albumId=${albumId}` : '';
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
    const id = this.props.id || 1;
    this.getPhotos(id);
  }

  render() {
    const {photos} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Photos</Text>
        {photos ? (
          photos.map((photo, k) => {
            return (
              <View key={k}>
                <Image
                  style={{width: 100, height: 100}}
                  source={{uri: photo.thumbnailUrl}}
                />
                <Text>{photo.title}</Text>
              </View>
            );
          })
        ) : (
          <Text>No Photos</Text>
        )}
      </View>
    );
  }
}
