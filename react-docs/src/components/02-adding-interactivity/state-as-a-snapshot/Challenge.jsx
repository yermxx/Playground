import { useState } from 'react';

// 신호등 구현하기

// BEFORE:
// export default function TrafficLight() {
//   const [walk, setWalk] = useState(true);

//   function handleClick() {
//     setWalk(!walk);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'}</button>
//       <h1
//         style={{
//           color: walk ? 'darkgreen' : 'darkred',
//         }}
//       >
//         {walk ? 'Walk' : 'Stop'}
//       </h1>
//     </>
//   );
// }

// AFTER:
export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk); // walk 상태 변경
    alert(walk ? '다음은 정지입니다' : '다음은 걷기입니다'); // alert 코드의 위치는 setWalk 전후 배치 상관 없음
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'}</button>
      <h1
        style={{
          color: walk ? 'darkgreen' : 'darkred',
        }}
      >
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}
