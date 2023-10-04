import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  // 상태
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'white',
    content: 'text',
  });
  // const [fruit, setFruit] = useState('apple');
  // const [bColor, setBColor] = useState('black');
  // const [color, setColor] = useState('white');
  // const [input, setInput] = useState('입력해보세요');
  // 자식 컴포넌트에 전달해주는 props에 함수 자체를 전달할 수도 있음!
  // 그럼 자식 컴포넌트가 이 함수를 받아서 따로 정의할 필요없이 기능을 사용할 수 있는 것!
  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Input setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Result data={data} />
      </div>
    </>
  );
}

export default App;
