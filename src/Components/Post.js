import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from '../Styles';
import User from './User';
import { FlatList } from 'react-native-gesture-handler';

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
      <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 10}}>
        {post && !loading ? (
          <View style={{marginBottom: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <User id={post.userId} navigation={navigation} />
            </View>
            <Text>{post.body}</Text>
          </View>
        ) : (
          <View />
        )}
        <FlatList
          style={{flex:1, paddingHorizontal: 10, marginBottom: 10}}
          data={comments}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
                <Text>{item.body}</Text>
              </View>
            );
          }}
          ListEmptyComponent={() => <Text>No Post</Text>}
        />
      </View>
    );
  }
}
