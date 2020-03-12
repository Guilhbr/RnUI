import React, {Component} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import styles from '../Styles';
import {getPhotos} from '../Redux/api/fetch';
import {connect} from 'react-redux';

class Photos extends Component {
  componentDidMount() {
    const {id} = this.props.route.params;
    this.props.dispatch(getPhotos(id));
  }

  render() {
    const {photos} = this.props;
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

const mapStateToProps = state => ({
  photos: state.photos.photos,
  loading: state.photos.tabLoading,
  error: state.photos.error,
});

export default connect(mapStateToProps)(Photos);
