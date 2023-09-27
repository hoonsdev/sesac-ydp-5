import { Component } from 'react';

class Handler_ex extends Component {
  state = {
    message: 'Hello World!',
  };

  changeMsg = () => {
    this.setState({ message: 'GoodBye World!' });
  };

  render() {
    const message = this.state.message;
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={this.changeMsg}>클릭</button>
      </div>
    );
  }
}

export default Handler_ex;
