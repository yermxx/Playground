import { useState } from 'react';

// BEFORE:
// export default function FeedbackForm() {
//   const [name, setName] = useState('');

//   function handleClick() {
//     setName(prompt('What is your name?'));
//     alert(`Hello, ${name}!`);
//   }

//   return (
//     <button onClick={handleClick}>
//       Greet
//     </button>
//   );
// }

// AFTER:
// 컴포넌트가 다시 렌더링 될 때만 정보를 유지하기 위해 state 변수가 필요
// 단일 이벤트 핸들러 내에서는 일반 변수가 잘 작동하므로, 굳이 state 변수가 필요하지 않다.

export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
