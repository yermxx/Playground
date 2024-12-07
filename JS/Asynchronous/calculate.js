// 1. 주어진 숫자를 2배로 만들고 그 결과에 1을 더하는 함수
// function calculate(number) {
//   return new Promise((resolve) => {
//     resolve(number * 2 + 1);
//   });
// }

// 2. then 체이닝으로 단계 분리
// function calculate(number) {
//   return new Promise((resolve) => resolve(number)).then((number) => number * 2).then((number) => number + 1);
// }

// 3. error 처리
// function calculate(num) {
//   return new Promise((resolve, reject) => (num > 0 ? resolve(num) : reject(num)))
//     .then((num) => num * 2 + 1)
//     .catch((error) => '숫자는 0보다 커야 합니다!!');
// }

// 이런 방법도 있다 !!
function calculate(num) {
  return Promise.resolve(num)
    .then((num) => {
      if (num <= 0) throw new Error('숫자는 0보다 커야 합니다!!!');
      return num * 2 + 1;
    })
    .catch((error) => error.message);
}

// test
calculate(3).then((result) => console.log(result)); // 7이 출력되어야 합니다
calculate(-5).then((result) => console.log(result)); // 7이 출력되어야 합니다
