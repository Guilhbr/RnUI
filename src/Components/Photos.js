import React, {Component} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';

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
      <ScrollView>
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
      </ScrollView>
    );
  }
}
