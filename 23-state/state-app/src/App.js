// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CounterFunction from './CounterFunction';
import Practice1 from './Practice1';
import Practice2 from './Practice2';
import SayFunction from './SayFunction';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <CounterFunction value={'Plus 1'} />
      <hr />
      <h1>실습</h1>
      <Practice1 />
      <Practice2 />
    </div>
  );
}

export default App;
