import React, { useRef, useState } from 'react';

export default function RefSample2() {
  // 로컬변수처럼 사용 -> 괄호에 초기값 넣어줌
  const id = useRef(7);
  const [number, setNumber] = useState(10);

  const plusIdRef = () => {
    id.current += 1;
    console.log(id.current);
  };

  const plusNumState = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <div>
        <p>함수형 컴포넌트에서 버튼 클릭 시 id 값을 1씩 증가</p>
        {/* 이렇게 하면 UI에서는 값 변경 안됨 */}
        {/* ref 값이 변경되어도 컴포넌트 랜더링 되지 않아서!! -> 로컬변수로 사용할 수 있다 */}
        <h2>{id.current}</h2>
        <button onClick={plusIdRef}>Plus</button>

        <p>비교. state 변경 시 ref와 다르게 리렌더링 확인</p>
        <h2>{number}</h2>
        <button onClick={plusNumState}>Plus</button>
      </div>
    </div>
  );
}
