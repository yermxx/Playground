function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    if (!promises.length) {
      resolve(results); // 빈 배열은 즉시 resolve 처리
      return;
    }

    promises.forEach((promise, idx) => {
      Promise.resolve(promise) // Promise가 아닌 값도 처리 가능하게
        .then((result) => {
          results[idx] = result; // 비동기 작업들이 다른 순서로 완료되어도 원래 순서 유지
          count++;

          if (count === promises.length) {
            resolve(results);
            return;
          }
        })
        .catch(reject); // 하나라도 실패하면 전체 실패
    });
  });
}

// test
const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

myPromiseAll([promise1, promise2, promise3])
  .then(console.log) // [1, 2, 3]
  .catch(console.error);
