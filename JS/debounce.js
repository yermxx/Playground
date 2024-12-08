// function debounce(cb, delay) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(...args);
//     }, delay);
//   };
// }

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const debounceFunc = debounce((msg) => console.log(msg), 1000);
debounceFunc('Hello 1');
debounceFunc('Hello 2');
debounceFunc('Hello 3');
debounceFunc('Hello 4');
debounceFunc('Hello 5');
