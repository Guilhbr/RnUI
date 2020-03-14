import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import userStyles from '../Styles/user';
import styles from '../Styles/';
import {connect} from 'react-redux';
import {getAlbums} from '../Redux/api/fetch';
import Loading from './Loading';

class Albums extends Component {
  componentDidMount() {
    const id = this.props.id;
    this.props.dispatch(getAlbums(id));
  }

  render() {
    const {albums, loading} = this.props;
    if (loading) {
      return <Loading />;
    }
    return (
      <ScrollView style={userStyles.sectionContainer}>
        <Text style={userStyles.sectionTitle}>Albums</Text>
        <View style={userStyles.albumContainer}>
          {albums ? (
            albums.map((album, k) => {
              return (
                <TouchableOpacity
                  key={k}
                  style={userStyles.albums}
                  onPress={() =>
                    this.props.navigation.navigate('Photos', {
                      id: album.id,
                    })
                  }>
                  <Text style={userStyles.albumTitle}>{album.title}</Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text style={styles.noDataText}>No Albums</Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.user.albums,
  loading: state.user.tabLoading,
  error: state.user.error,
});

export default connect(mapStateToProps)(Albums);
