import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import styles from '../Styles';
import {connect} from 'react-redux';
import {getAlbums} from '../Redux/api/fetch';

class Albums extends Component {
  componentDidMount() {
    const id = this.props.id;
    this.props.dispatch(getAlbums(id));
  }

  render() {
    const {albums} = this.props;
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

const mapStateToProps = state => ({
  albums: state.user.albums,
  loading: state.user.tabLoading,
  error: state.user.error,
});

export default connect(mapStateToProps)(Albums);
