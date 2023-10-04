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

  addData = () => {
    const newData = this.state.data.concat({
      id: this.state.data.length + 1,
      writer: this.state.writer,
      title: this.state.title,
    });
    if (this.state.writer && this.state.title) {
      this.setState({
        data: newData,
        // input 창 초기화
        writer: '',
        title: '',
      });
    }
  };
  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="writer">작성자 : </label>
          <input
            id="writer"
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
                this.addData();
              }
            }}
          />
          <label htmlFor="title">제목 : </label>
          <input
            id="title"
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
                this.addData();
              }
            }}
          />
          <button onClick={this.addData}>작성</button>
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
