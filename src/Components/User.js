import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getUser} from '../Redux/api/fetch';

class User extends Component {
  componentDidMount() {
    const id = this.props.id;
    this.props.dispatch(getUser(id));
  }

  componentDidUpdate(nextProps) {
    if (this.props.user.username !== nextProps.user.username) {
    }
  }

  render() {
    const {user, loading} = this.props;
    const username = (user && user.username) || '';
    if (loading) {
      <></>;
    }
    return (
      <TouchableOpacity
        style={{margin: 5}}
        onPress={() => this.props.navigation.push('Profile', {user})}>
        <Text>By {username}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  loading: state.user.loading,
  error: state.user.error,
});

export default connect(mapStateToProps)(User);
