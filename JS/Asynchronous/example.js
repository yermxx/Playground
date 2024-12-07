// Promise.resolve().then(() => console.log(1));

// queueMicrotask(() => console.log(2));

// setTimeout(() => console.log(3), 0);

// console.log(4);

// new Promise(() => console.log(5));
// // new Promise의 본문은 동기적으로 실행됨
// // resolve가 나머지를 비동기적으로 실행하는 것 뿐

// (async () => console.log(6))();
// // 즉시 호출되는 비동기 함수. 여기 본문도 동기적으로 실행됨
// // 기다리고 있는 값들이 비동기적으로 실행되는 것
