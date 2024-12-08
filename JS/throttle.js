// function throttle(cb, delay) {
//   let timer;
//   return function (...args) {
//     if (timer) return;
//     timer = setTimeout(() => {
//       cb(...args);
//       timer = null; // 다음 실행을 위한 준비
//     }, delay);
//   };
// }

const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        cb(...args);
        timer = null;
      }, delay);
    }
  };
};

const throttleFunc = throttle((msg) => console.log(msg), 1000);
throttleFunc('Hello 1');
throttleFunc('Hello 2');
throttleFunc('Hello 3');
throttleFunc('Hello 4');
throttleFunc('Hello 5');
