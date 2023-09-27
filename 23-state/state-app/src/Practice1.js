import { Component } from 'react';

class Practice extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    const addTwo = () => {
      this.setState({ number: number + 2 });
    };
    const minusOne = () => {
      this.setState({ number: number - 1 });
    };
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={addTwo}>+2</button>
        <button onClick={minusOne}>-1</button>
      </div>
    );
  }
}

export default Practice;
