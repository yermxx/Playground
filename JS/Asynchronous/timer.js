// 1. delay 밀리초만큼 기다린 후 '완료!'를 반환하는 함수 만들기
// function wait(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve('완료!'), delay);
//   });
// }

// 2. delay 시간이 0 이하면 에러 처리 + 진행률을 1초마다 콘솔에 출력
// function wait(delay) {
//   return Promise.resolve()
//     .then(() => {
//       if (delay <= 0) throw new Error('delay는 0초 이상이어야 합니다!!');
//       setTimeout(() => '20% 완료', 1000);
//     })
//     .catch((error) => console.log(error.message));
// }

function wait(delay) {
  return new Promise((resolve, reject) => {
    if (delay <= 0) {
      reject('delay는 0초 이상이어야 합니다!!');
      return;
    }

    let currentTime = 0;
    const interval = setInterval(() => {
      currentTime += 1000;
      const progress = (currentTime / delay) * 100;
      console.log(`${progress}% 완료`);

      if (currentTime === delay) {
        clearInterval(interval);
        resolve('완료!!');
      }
    }, 1000);
  });
}

// 테스트
// wait(2000) // 2초 후
//   .then((message) => console.log(message)); // "완료!" 출력

wait(5000) // 5초
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

wait(0) // 에러 케이스
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
