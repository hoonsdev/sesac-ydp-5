// state 초기값 정의
const initialState = false;

// reducer 정의: 변화를 일으키는 함수
const isVisibleReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE') {
    return !state;
  }
  return state;
};

export default isVisibleReducer;
