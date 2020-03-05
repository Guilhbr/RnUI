import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {post: {}, comments: []};
  }

  getPost(id) {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => {
          this.setState({post: json});
        });
    } catch (e) {
      console.log(e);
    }
  }

  getComments(id) {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(json => {
          this.setState({comments: json});
        });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const id = this.props.id || 1;
    this.getPost(id);
    this.getComments(id);
  }

  render() {
    const {post, comments} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {post && (
          <View>
            <Text>{post.title}</Text>
            <Text>{post.body}</Text>
          </View>
        )}
        {comments ? (
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
      </View>
    );
  }
}
