import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from '../Styles';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {loadingText: 'Loading', dots: 0};
  }

  componentDidMount() {
    this.timer = setInterval(() => this.changeText(), 400);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  changeText() {
    const {dots} = this.state;
    const newDots = (dots + 1) % 4;
    const text = `Loading${'.'.repeat(newDots)}`;
    this.setState({loadingText: text, dots: newDots});
  }

  render() {
    const {loadingText} = this.state;
    return <Text style={styles.noDataText}>{loadingText}</Text>;
  }
}
