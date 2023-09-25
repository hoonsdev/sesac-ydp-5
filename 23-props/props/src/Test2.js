import React, { Component } from 'react';
import banana from './banana.jpeg';

class Test2 extends Component {
  style = {
    color: 'orange',
    fontSize: '40px',
    marginTop: '20',
  };

  render() {
    return (
      <div style={this.style}>
        <h2>안녕하세요</h2>
        <img src={banana} alt="banana" />
      </div>
    );
  }
}

export default Test2;
