import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {getPosts} from '../Middleware/fetch';
import _ from 'lodash';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  getPosts() {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
          this.setState({posts: _.uniqBy(json, 'id')});
        });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const {posts} = this.state;
    const titles = posts && _.map(posts, post => post.title);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        {titles ? (
          titles.map((title, k) => <Text key={k}>{title}</Text>)
        ) : (
          <Text>No Posts Found</Text>
        )}
      </View>
    );
  }
}
