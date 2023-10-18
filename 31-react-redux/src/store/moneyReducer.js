const PLUS = 'money/PLUS';
const MINUS = 'money/MINUS';

export const plus = (input) => ({ type: PLUS, payload: input });
export const minus = (input) => ({ type: MINUS, payload: input });

const initialState = {
  number: 5000,
};

const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { number: +state.number + Number(action.payload) };
    case MINUS:
      return { number: +state.number - Number(action.payload) };
    default:
      return state;
  }
};

export default moneyReducer;
