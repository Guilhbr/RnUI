import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from '../Styles';
import postStyles from '../Styles/posts';
import User from './User';
import {connect} from 'react-redux';
import {getComments} from '../Redux/api/fetch';
import {resetPost} from '../Redux/actions/post';
import Loading from './Loading';

class Post extends Component {
  componentDidMount() {
    const {post} = this.props.route.params;
    this.props.dispatch(getComments(post.id));
  }

  componentWillUnmount() {
    this.props.dispatch(resetPost());
  }

  render() {
    const {comments, loading, navigation} = this.props;
    const {post} = this.props.route.params;
    return (
      <View style={postStyles.postViewContainer}>
        {post && (
          <View style={postStyles.postContainer}>
            <Text style={postStyles.postTitle}>{post.title}</Text>
            <User id={post.userId} navigation={navigation} />
            <Text style={styles.text}>{post.body}</Text>
          </View>
        )}
        <FlatList
          style={postStyles.commentListContainer}
          data={comments}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={postStyles.commentContainer}>
                <Text style={postStyles.commentUser}>{item.email}</Text>
                <Text style={postStyles.commentTitle}>{item.name}</Text>
                <Text>{item.body}</Text>
              </View>
            );
          }}
          ListEmptyComponent={() => {
            if (loading) {
              return <Loading />;
            }
            return <Text style={styles.noDataText}>No Comments</Text>;
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.post.comments,
  loading: state.post.loading,
  error: state.post.error,
});

export default connect(mapStateToProps)(Post);
