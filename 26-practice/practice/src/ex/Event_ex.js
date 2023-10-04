import React, { useState } from 'react';

export default function Event_ex() {
  // 리스트를 나타내기 위한 data
  const [data, setData] = useState([
    {
      id: 1,
      name: '하이',
      email: 'asdf1234@naver.com',
    },
  ]);
  // input 에 들어갈 값을 관리하는 inputValue
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const addData = () => {
    const newData = data.concat({
      id: data.length + 1,
      name: nameInput,
      email: emailInput,
    });
    if (nameInput && emailInput) {
      setData(newData);
    } else {
      return;
    }
    setNameInput('');
    setEmailInput('');
  };
  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.code === 'Enter') {
      addData();
    }
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={nameInput}
        placeholder="이름"
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <input
        type="email"
        name="email"
        value={emailInput}
        placeholder="이메일"
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addData}>등록</button>
      <ul style={{ listStyle: 'none' }}>
        {data.map((el) => {
          return (
            <li key={el.id}>
              <h2>{el.name && el.email ? `${el.name}: ${el.email}` : ''}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
