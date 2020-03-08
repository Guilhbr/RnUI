import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import User from './User';
import styles from '../Styles';
import _ from 'lodash';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  getPosts(id) {
    try {
      const url = id ? `?userId=${id}` : '';
      fetch(`https://jsonplaceholder.typicode.com/posts${url}`)
        .then(response => response.json())
        .then(json => {
          this.setState({posts: _.uniqBy(json, 'id'), loading: false});
        });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const id = this.props.id;
    this.getPosts(id);
  }

  render() {
    const {posts, loading} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView>
        {posts && !loading ? (
          posts.map((post, k) => (
            <TouchableOpacity
              key={k}
              onPress={() => navigation.navigate('Post', {id: post.id})}>
              <View style={styles.postsContainer}>
                <Text style={styles.title}>{post.title}</Text>
                <User id={post.userId} navigation={navigation} />
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
