import { useReducer, useState } from 'react';

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

export default function Bank() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>Welcome to the useReducer Bank!</h2>
      <p>잔고: {money}원</p>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step="1000" />
      <button onClick={() => dispatch({ type: ACTION_TYPES.deposit, payload: number })}>예금</button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.withdraw, payload: number })}>출금</button>
    </>
  );
}
