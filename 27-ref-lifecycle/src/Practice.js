import React, { Component } from 'react';

export default class Practice extends Component {
  state = {
    writer: '',
    title: '',
    data: [
      {
        id: 1,
        writer: '김땡땡',
        title: '안녕하세요',
      },
    ],
  };

  // Ref 생성
  writerRef = React.createRef();
  titleRef = React.createRef();

  handleInput = () => {
    if (this.state.writer.trim() && this.state.title.trim()) {
      // input에 값이 있을 때만 새로운 데이터 추가
      const newData = this.state.data.concat({
        id: this.state.data.length + 1,
        writer: this.state.writer,
        title: this.state.title,
      });
      this.setState({
        data: newData,
        // input 창 초기화
        writer: '',
        title: '',
      });
    } else if (this.state.writer.trim()) {
      // 하나의 input이 빈 값일 때 포커싱
      this.titleRef.current.focus();
    } else {
      this.writerRef.current.focus();
    }
  };
  render() {
    return (
      <div>
        <fieldset>
          {'작성자: '}
          <input
            ref={this.writerRef}
            type="text"
            value={this.state.writer}
            onChange={(e) => {
              this.setState({ writer: e.target.value });
            }}
            onKeyDown={(e) => {
              if (e.nativeEvent.isComposing) {
                return;
              }
              if (e.code === 'Enter') {
                this.handleInput();
              }
            }}
          />
          {'제목: '}
          <input
            ref={this.titleRef}
            type="text"
            value={this.state.title}
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
            onKeyDown={(e) => {
              if (e.nativeEvent.isComposing) {
                return;
              }
              if (e.code === 'Enter') {
                this.handleInput();
              }
            }}
          />
          <button onClick={this.handleInput}>작성</button>
        </fieldset>
        <div>
          <table>
            <thead>
              <tr>
                <td>번호</td>
                <td>제목</td>
                <td>작성자</td>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((el) => {
                return (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.writer}</td>
                    <td>{el.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
