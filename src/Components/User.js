import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getUser} from '../Redux/api/fetch';
import userStyles from '../Styles/user';

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
    if (loading || !username) {
      return <></>;
    }
    return (
      <TouchableOpacity
        style={userStyles.userButton}
        onPress={() => this.props.navigation.navigate('Profile', {user})}>
        <Text style={userStyles.userButtonText}>By {username}</Text>
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
