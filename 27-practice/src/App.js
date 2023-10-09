import Input from './components/Input';
import Login from './components/Login';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo />
      <hr />
      <Input />
      <hr />
      <Login />
    </div>
  );
}

export default App;
