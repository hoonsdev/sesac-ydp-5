import './App.css';
import Book from './Book';
import Button from './Button';
import ClassComponent from './ClassComponent';
import Console from './Console';
import Food from './Food';
import FunctionComponent from './FunctionComponent';
import Test from './Test';
import Test2 from './Test2';

function App() {
  return (
    <div className="App">
      {/* FunctionComponent가 props로 넘어가서 여기의 name 속성을 Fun~~ 여기서 사용할 수 있는 것 */}
      <FunctionComponent name="새싹" />
      <FunctionComponent />
      <hr />
      {/* <ClassComponent name="새싹2" /> */}
      <ClassComponent />
      <Button link="https://www.google.com">Google</Button>
      <hr />
      {/* Component 실습*/}
      <Test />
      <Test2 />
      <hr />
      {/* Props 실습 */}
      <Food />
      <Book
        title="나의 하루는 4시 30분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <Console text="콘솔 띄우기 성공!" valid={true} />
    </div>
  );
}

export default App;
