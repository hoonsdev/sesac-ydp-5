import { useState } from 'react';

const State_event2 = () => {
  const [msg, setMsg] = useState('안녕하세요');
  const [btnText, setBtnText] = useState('사라져라');

  const toggleMsg = () => {
    if (btnText === '사라져라') {
      setMsg('');
      setBtnText('나타나라');
    } else {
      setMsg('안녕하세요');
      setBtnText('사라져라');
    }
  };

  return (
    <div>
      <button onClick={toggleMsg}>{btnText}</button>
      <h1>{msg}</h1>
    </div>
  );
};

export default State_event2;
