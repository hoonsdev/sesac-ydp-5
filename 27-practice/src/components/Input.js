import React, { useState } from 'react';
import useInputs from '../hooks/useInputs';

export default function Input() {
  const [form, onChange, reset] = useInputs({
    id: 0,
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = form;
  const [list, setList] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    setList([...list, { id: list.length + 1, name, email, password }]);
    reset();
  };
  return (
    <div>
      <form>
        <label htmlFor="name">이름 :</label>
        <input type="text" name="name" value={name} onChange={onChange} />
        <label htmlFor="email">이메일 : </label>
        <input type="email" name="email" value={email} onChange={onChange} />
        <label htmlFor="password">비밀번호 : </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button onClick={(e) => submit(e)}>제출</button>
      </form>

      <ul>
        {list.map((el) => {
          return (
            <li key={el.id}>
              <div>아이디 : {el.email}</div>
              <div>비밀번호 : {el.password}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
