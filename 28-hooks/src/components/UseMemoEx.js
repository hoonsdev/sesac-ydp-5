import React, { useMemo, useState } from 'react';

// useMemo(): Memorization으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화
export default function UseMemoEx() {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  // 임의의 큰 연산을 하는 함수
  // 버튼을 누를 때, input을 입력 할 때 모두 연산이 이루어지고 있음. (calc 함수 호출)
  // useMemo -> 랜더링 과정에서 특정 값을 기억해서(어느 시점에서의 최종 결과값..!!) 그 값이 바뀔 때에만 연산이 진행되도록 최적화!

  // [before]
  // const calc = () => {
  //   console.log('열심히 계산 중....');
  //   for (let i = 0; i < 1000000; i++) {}
  //   return count ** 2;
  // };

  // [after]
  // count의 값이 바뀔 때에만 함수를 실행
  // input 상태가 바뀌면 컴포넌트는 리랜더링 되지만, calc는 연산되지 않음!
  const calc = useMemo(() => {
    console.log('열심히 계산 중....');
    for (let i = 0; i < 1000000; i++) {}
    return count ** 2;
  }, [count]);

  return (
    <div>
      <h1>UseMemo ex</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <p>count: {count}</p>

      {/* [before] */}
      {/* <p>calc: {calc()}</p> */}

      {/* [after] */}
      <p>calc: {calc}</p>
    </div>
  );
}
