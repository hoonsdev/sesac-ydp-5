import React, { useState } from 'react';
import MoneyInput from './components/MoneyInput';
import Balance from './components/Balance';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from './store/moneyReducer';

export default function Practice() {
  const balance = useSelector((state) => state.balance.number);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <h1>React Redux 실습</h1>
      <hr />
      <h2>코딩온 은행</h2>
      <Balance balance={balance} />
      <MoneyInput
        input={input}
        setInput={setInput}
        onPlus={() => dispatch(plus(input))}
        onMinus={() => dispatch(minus(input))}
      />
    </div>
  );
}
