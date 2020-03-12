import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getPosts} from '../Redux/api/fetch';
import styles from '../Styles';
import _ from 'lodash';

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
      return <Text> LOADING ... </Text>;
    }
    return (
      <ScrollView>
        {posts && !loading ? (
          posts.map((post, k) => (
            <TouchableOpacity
              key={k}
              onPress={() => navigation.navigate('Post', {id: post.id, post})}>
              <View style={styles.postsContainer}>
                <Text style={styles.title}>{post.title}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No Posts Found</Text>
        )}
      </ScrollView>
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
