import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Console extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h1>App 컴포넌트에서 넘겨준 text props 입니다</h1>
        <button
          onClick={() => {
            console.log(text);
          }}
        >
          콘솔 메세지
        </button>
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
