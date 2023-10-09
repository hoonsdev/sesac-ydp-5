import React, { useReducer } from 'react';

const answerData = {
  id: 'banana',
  pw: '4321',
};

const initState = {
  id: '',
  pw: '',
  isLogin: false, // 로그인 여부
  message: '', // 경고 메세지
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOGIN':
      // logins
      if (prevState.id !== answerData.id && prevState.pw !== answerData.pw) {
        return { ...prevState, message: '아이디 비번 모두 오류!' };
      } else if (prevState.id !== answerData.id) {
        return { ...prevState, message: '아이디 오류!' };
      } else if (prevState.pw !== answerData.pw) {
        return { ...prevState, message: '비번 오류!' };
      } else {
        // 모두 일치 -> 로그인 처리, 메세지 삭제
        return { ...prevState, isLogin: true, message: '' };
      }
    case 'UPDATE_ID':
      // state의 id 속성 값을 e.target.value로 설정
      return { ...prevState, id: action.event.target.value };
    case 'UPDATE_PW':
      // state의 pw 속성 값을 e.target.value로 설정
      return { ...prevState, pw: action.event.target.value };
    default:
      // logout -> 다른 부분에서 알아서 키-벨류 값 설정해주니까 빈 객체 리턴해도 됨
      // 이런 줄 알았는데 정상적으로 기능은 작동하지만 다른 부분에서 보면
      // undefined에서 defined로 값을 바꿔주는거라 권장하지 않는다고 나옴.
      return initState;
  }
};

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initState);

  const login = () => dispatch({ type: 'LOGIN' });
  const logout = () => dispatch({ type: 'LOGOUT' });
  const updateId = (e) => dispatch({ type: 'UPDATE_ID', event: e });
  const updatePw = (e) => dispatch({ type: 'UPDATE_PW', event: e });
  return (
    <div>
      <h2>Login Ex</h2>
      <p>정답 아이디: banana / 정답 비번: 4321</p>
      {!state.isLogin && (
        <form>
          ID
          <input type="text" value={state.id} onChange={(e) => updateId(e)} />
          <br />
          PW
          <input
            type="password"
            value={state.pw}
            onChange={(e) => updatePw(e)}
          />
          <br />
          <button type="button" onClick={login}>
            Login
          </button>
        </form>
      )}
      <div>{state.message}</div>
      {state.isLogin && (
        <div>
          <span>
            환영합니다~ <b>{state.id}</b>님!
          </span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
