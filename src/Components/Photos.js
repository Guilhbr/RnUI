import React, {Component} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import userStyles from '../Styles/user';
import styles from '../Styles/';
import {getPhotos} from '../Redux/api/fetch';
import {connect} from 'react-redux';
import Loading from './Loading';
import PhotoView from '@merryjs/photo-viewer';
import _ from 'lodash';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, index: 0};
  }
  componentDidMount() {
    const {id} = this.props.route.params;
    this.props.dispatch(getPhotos(id));
  }

  openPhoto(index) {
    this.setState({showModal: true, index});
  }

  setupPhotos(photos) {
    return _.map(photos, photo => {
      return {source: {uri: photo.url}, title: photo.title};
    });
  }

  render() {
    const {photos, loading} = this.props;
    const {showModal, index} = this.state;
    const viewerPhotos = this.setupPhotos(photos);
    if (loading) {
      return <Loading />;
    }
    return (
      <ScrollView style={styles.container}>
        <PhotoView
          visible={showModal}
          data={viewerPhotos}
          hideStatusBar
          initial={index}
          onDismiss={() => this.setState({showModal: false})}
        />
        <View style={userStyles.photosContainer}>
          {photos ? (
            photos.map((photo, k) => {
              return (
                <TouchableOpacity
                  key={k}
                  style={userStyles.photo}
                  onPress={() => this.openPhoto(k)}>
                  <Image
                    style={styles.container}
                    source={{uri: photo.thumbnailUrl}}
                  />
                </TouchableOpacity>
              );
            })
          ) : (
            <Text style={styles.noDataText}>No Photos</Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  loading: state.photos.loading,
  error: state.photos.error,
});

export default connect(mapStateToProps)(Photos);
