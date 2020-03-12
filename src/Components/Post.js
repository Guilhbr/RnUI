import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from '../Styles';
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
      <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 10}}>
        {post && (
          <View style={{marginBottom: 20}}>
            <View
              style={{flexDirection: 'column', justifyContent: 'space-between', marginBottom: 15}}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <User id={post.userId} navigation={navigation} />
            </View>
            <Text>{post.body}</Text>
          </View>
        )}
        <FlatList
          style={{flex:1, paddingHorizontal: 10, marginBottom: 10}}
          data={comments}
          renderItem={({item}) => {
            return (
              <View
                key={item.id}
                style={{borderWidth: 1, marginBottom: 10, padding: 10}}>
                <Text style={{color: 'blue'}}>{item.email}</Text>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text>{item.body}</Text>
              </View>
            );
          }}
          ListEmptyComponent={() => {
            if (loading) {
              return <Loading />;
            }
            return <Text>No Comments</Text>;
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
