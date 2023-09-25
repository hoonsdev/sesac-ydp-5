// React import
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class ClassComponent extends React.Component {
class ClassComponent extends Component {
  student = '홍길동';
  render() {
    const { name } = this.props;
    console.log('props: ', this.props);
    return (
      <div>
        <h1>Hi {this.student}!</h1>
        <p>여기는 Class Component!</p>
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    );
  }

  // static defaultProps = {
  //   name: '기본 이름',
  // };

  // static propTypes = {
  //   name: PropTypes.string,
  // };
}

ClassComponent.defaultProps = {
  name: '기본 이름 하하',
};

// default도 없어야 isRequired 동작함
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ClassComponent;
