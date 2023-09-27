import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Console extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

Console.defaultProps = {
  text: '이건 기본 text props입니다.',
};

Console.propTypes = {
  text: PropTypes.string,
};

export default Console;
