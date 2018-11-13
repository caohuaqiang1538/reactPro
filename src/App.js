import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class Clock extends Component {
  constructor(props){
    super(props);
    this.state = { data : new Date() };
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date:new Date()
    });
  }
  render() {
    return (
      <div>
        <h2>当前时间为：{this.state.data.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
