import React from 'react';

export default function MoneyInput({ input, setInput, onPlus, onMinus }) {
  return (
    <div>
      <input
        type="number"
        name=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onPlus}>입금</button>
      <button onClick={onMinus}>출금</button>
    </div>
  );
}
