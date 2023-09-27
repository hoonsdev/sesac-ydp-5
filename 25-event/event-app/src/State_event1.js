import { useState } from 'react';

const State_event1 = () => {
  const [msg, setMsg] = useState('검정색 글씨');
  const [style, setStyle] = useState({ color: 'black' });

  const changeRed = () => {
    setMsg('빨간색 글씨');
    setStyle({ color: 'red' });
  };

  const changeBlue = () => {
    setMsg('파란색 글씨');
    setStyle({ color: 'blue' });
  };

  return (
    <div>
      <h1 style={style}>{msg}</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
};

export default State_event1;
