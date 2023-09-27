// import logo from './logo.svg';
import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import State_event1 from './State_event1';
import State_event2 from './State_event2';
import SyntheticEvent from './SyntheticEvent';
import Handler_ex from './ex/Handler_ex';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <Handler_ex />
      <hr />
      <State_event1 />
      <hr />
      <State_event2 />
    </div>
  );
}

export default App;
