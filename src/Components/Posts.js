import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getPosts} from '../Redux/api/fetch';
import styles from '../Styles';
import postStyles from '../Styles/posts';
import _ from 'lodash';
import Loading from './Loading';

class Posts extends Component {
  componentDidMount() {
    const id = this.props.id;
    this.props.dispatch(getPosts(id));
  }

  render() {
    const {id, navigation} = this.props;
    const posts = id ? this.props.userPosts : this.props.posts;
    const loading = id ? this.props.tabLoading : this.props.loading;
    if (loading) {
      return <Loading />;
    }
    return (
      <FlatList
        style={styles.container}
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Post', {post: item})}>
              <View style={postStyles.postButton}>
                <Text style={postStyles.listTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={() => {
          return <Text style={styles.noDataText}>No Posts Found</Text>;
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error,
  userPosts: state.user.posts,
  tabLoading: state.user.tabLoading,
  userError: state.user.error,
});

export default connect(mapStateToProps)(Posts);
