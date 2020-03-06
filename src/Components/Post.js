import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import User from './User';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {post: {}, comments: [], loading: true};
  }

  getPostAndComments(id) {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => {
          this.setState({post: json, loading: false});
        });
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(comments => {
          this.setState({comments});
        });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const {id} = this.props.route.params;
    this.getPostAndComments(id);
  }

  render() {
    const {post, comments, loading} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView>
        {post && !loading ? (
          <View style={{marginBottom: 10}}>
            <Text>{post.title} By</Text>
            <User id={post.userId} navigation={navigation} />
            <Text>{post.body}</Text>
          </View>
        ) : (
          <View />
        )}
        {comments && !loading ? (
          comments.map((comment, k) => {
            return (
              <View key={k}>
                <Text>{comment.name}</Text>
                <Text>{comment.email}</Text>
                <Text>{comment.body}</Text>
              </View>
            );
          })
        ) : (
          <Text>No Post</Text>
        )}
      </ScrollView>
    );
  }
}
