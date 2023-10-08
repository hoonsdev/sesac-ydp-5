import React, { useRef, useState } from 'react';

export default function Todo() {
  const inputRef = useRef();
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addList = () => {
    if (!todo.trim()) {
      inputRef.current.focus();
      return;
    }
    setTodoList([...todoList, { id: new Date(), todo: todo, checked: false }]);
    setTodo('');
    if (todoList.length >= 10) alert('할 일이 너무 많습니다~');
  };
  const handleChecked = (e, idx) => {
    todoList[idx].checked = e.target.checked;
  };
  const removeList = () => {
    const newTodo = todoList.filter((el) => el.checked === false);
    setTodoList(newTodo);
  };

  return (
    <div>
      <h1>Todo 실습</h1>
      <input
        type="text"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) {
            return;
          }
          if (e.code === 'Enter') {
            addList();
          }
        }}
      />
      <button onClick={addList}>추가</button>
      {/* 할일 list */}
      <ul>
        {todoList.map((el, idx) => {
          return (
            <li key={el.id}>
              <input type="checkbox" onChange={(e) => handleChecked(e, idx)} />
              {el.todo}
            </li>
          );
        })}
      </ul>
      <br />
      <button onClick={removeList}>완료된 할 일 삭제</button>
    </div>
  );
}
