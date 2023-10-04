import React, { useState } from 'react';

export default function Alphabet() {
  // const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [list, setList] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');
  const addAlpha = () => {
    // [퀴즈] input 빈값이면 list 상태가 변경되지 않도록 하기
    const newAlpha = list.concat({ id: list.length + 1, alpha: inputAlpha });
    if (inputAlpha) {
      setList(newAlpha);
    } else {
      return;
    }
    setInputAlpha('');
  };
  const deleteAlpha = (targetId) => {
    // targetId: 삭제될 요소의 id
    console.log(targetId);
    const newAlpha = list.filter((alpha) => {
      return alpha.id !== targetId;
    });
    setList(newAlpha);
  };
  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.code === 'Enter') {
      addAlpha();
    }
  };
  return (
    <div>
      {/* <ol>
        {alphabet.map((value, idx) => (
          // key prop은 리액트 가상돔에서 구분하기 위한 용도. 실제로 랜더링 되는것은 아님!
          <li key={idx}>{value}</li>
        ))}
      </ol> */}
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        // [퀴즈] input에서 enter 키 누르면 추가되도록!
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {/* {list.map((value) => (
          <li key={value.id}>{value.alpha}</li>
        ))} */}
        {list.map((value) => {
          return (
            <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
              {value.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
