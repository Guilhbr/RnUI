import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  getTodos(userId) {
    try {
      const url = parseInt(userId, 10) ? `?userId=${userId}` : '';
      fetch(`https://jsonplaceholder.typicode.com/todos${url}`)
        .then(response => response.json())
        .then(json => {
          this.setState({todos: json});
        });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const id = this.props.id || 1;
    this.getTodos(id);
  }

  render() {
    const {todos} = this.state;
    return (
      <ScrollView>
        <Text style={{alignSelf:'center'}}>Todos</Text>
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