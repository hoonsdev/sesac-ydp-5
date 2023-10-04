import React, { Component } from 'react';

export default class RefSample3 extends Component {
  handleFocus = () => {
    console.log(this); // 여기서 this는 컴포넌트 자기 자신
    this.inputRef.focus();
  };
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭 시 input에 포커싱 처리</p>
        <input
          type="text"
          ref={(ref) => {
            this.inputRef = ref;
          }}
        />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    );
  }
}
