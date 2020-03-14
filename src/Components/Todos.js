import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import styles from '../Styles';
import userStyles from '../Styles/user';
import {connect} from 'react-redux';
import {getTodos} from '../Redux/api/fetch';
import Loading from './Loading';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {toggle: false};
  }
  componentDidMount() {
    const id = this.props.id;
    this.props.dispatch(getTodos(id));
  }

  render() {
    const {todos, loading} = this.props;
    const {toggle} = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <ScrollView style={userStyles.sectionContainer}>
        <Text style={userStyles.sectionTitle}>Todos</Text>
        <TouchableOpacity
          style={[userStyles.todoToggle, toggle && userStyles.todoToggleOff]}
          onPress={() => this.setState({toggle: !toggle})}>
          <Text style={userStyles.todoToggleText}>Toggle Completed</Text>
        </TouchableOpacity>
        {todos ? (
          todos.map((todo, k) => {
            if (toggle && todo.completed) {
              return;
            }
            return (
              <View key={k}>
                <Text
                  style={[
                    userStyles.todo,
                    todo.completed && userStyles.todoCompleted,
                  ]}>
                  - {todo.title}
                </Text>
              </View>
            );
          })
        ) : (
          <Text style={styles.noDataText}>No Todos</Text>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.user.todos,
  loading: state.user.tabLoading,
  error: state.user.error,
});

export default connect(mapStateToProps)(Todos);
