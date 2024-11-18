// 고장난 시계를 고쳐보세요

// BEFORE:
// export default function Clock({ time }) {
//   let hours = time.getHours();
//   if (hours >= 0 && hours <= 6) {
//     document.getElementById('time').className = 'night';
//   } else {
//     document.getElementById('time').className = 'day';
//   }
//   return <h1 id="time">{time.toLocaleTimeString()}</h1>;
// }

// AFTER:
// 렌더링은 연산이며, 무언가를 실행하려고 해서는 안된다.
// 직접 DOM을 조작하려고 하면 리액트의 선언적 패러다임에 어긋나는 행위이며,
// 렌더링 중에 DOM을 직접 수정하면 안된다.

export default function Clock({ time }) {
  let className,
    hours = time.getHours();
  if (hours >= 0 && hours <= 6) className = 'night';
  else className = 'day';

  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}
