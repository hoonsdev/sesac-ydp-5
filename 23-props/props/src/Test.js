// React import
import React, { Component } from 'react';

class Test extends Component {
  name = '김태훈';
  my_style = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12px',
  };

  render() {
    return <div style={this.my_style}>코딩온</div>;
  }
}

export default Test;
