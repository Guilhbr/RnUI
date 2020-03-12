import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from '../Styles';
import {connect} from 'react-redux';
import {getTodos} from '../Redux/api/fetch';

class Todos extends Component {
  componentDidMount() {
    const id = this.props.id;
    this.props.dispatch(getTodos(id));
  }

  render() {
    const {todos} = this.props;
    return (
      <ScrollView style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Todos</Text>
        {todos ? (
          todos.map((todo, k) => {
            return (
              <View key={k}>
                <Text>
                  {todo.completed ? `[COMPLETED] ${todo.title}` : todo.title}
                </Text>
              </View>
            );
          })
        ) : (
          <Text>No Todos</Text>
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
