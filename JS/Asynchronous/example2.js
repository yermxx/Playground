// ex 1)
console.log('시작'); // 1

setTimeout(() => console.log('타이머 1'), 0); // 9

Promise.resolve()
  .then(() => {
    console.log('프로미스 1'); // 3
    setTimeout(() => console.log('타이머 2'), 0); // 10
    return new Promise((resolve) => {
      console.log('프로미스 2'); // 4
      resolve('resolve 1');
    });
  })
  .then((result) => {
    console.log(result); // 5
    Promise.resolve()
      .then(() => {
        console.log('프로미스 3'); // 6
        return 'resolve 2';
      })
      .then((result) => console.log(result)); // 8
    return 'resolve 3';
  })
  .then((result) => console.log(result)); // 7 - 새로운 Promise 체인이 완료되기를 기다리지 않고 바로 실행됨

console.log('끝'); // 2

// ex 2)
console.log('시작'); // 1

async function getData() {
  console.log('getData 시작'); // 4
  await Promise.resolve().then(() => console.log('프로미스 1')); // 5
  setTimeout(() => console.log('타이머 1'), 0); // 9
  return 'data';
}

setTimeout(() => console.log('타이머 2'), 0); // 8

Promise.resolve()
  .then(async () => {
    console.log('프로미스 2'); // 3
    const result = await getData();
    console.log(result); // 6
    return '완료';
  })
  .then((result) => console.log(result)); // 7

console.log('끝'); // 2

// ex 3)
console.log('시작'); // 1

async function fetchUser() {
  console.log('유저 정보 요청'); // 4
  await new Promise((resolve) => setTimeout(resolve, 0));
  return { name: '철수' }; // fetchUser의 setTimeout이 완료되면 그제서야 '철수' 반환
}

setTimeout(() => console.log('타이머 1'), 0); // 5
// fetchUser 안의 Promise로 감싼 setTimeout은 await으로 인해 대기 -> 그동안 다른 매크로태스크인 '타이머 1'이 실행될 수 있음
// await으로 인한 대기 시간 동안 다른 매크로태스크가 실행될 수 있는 기회가 생김

Promise.resolve()
  .then(() => {
    console.log('프로미스 1'); // 3
    return fetchUser();
  })
  .then((user) => {
    console.log(user.name); // 6
    setTimeout(() => console.log('타이머 2'), 0); // 8
    return 'done';
  })
  .then((result) => console.log(result)); // 7

console.log('끝'); // 2

// ex 4)
console.log('시작'); // 1

async function fetchData() {
  console.log('데이터 요청'); // 4
  await Promise.reject('에러 발생!');
  return '성공'; // error 발생 시 catch 블록으로 이동하기 때문에 실행되지 않음 !!
}

setTimeout(() => console.log('타이머'), 0); // 9

Promise.resolve()
  .then(() => {
    console.log('프로미스 1'); // 3
    return fetchData().catch((error) => {
      console.log(error); // 5 - 에러 발생!
      return '복구됨';
    });
  })
  .then((result) => {
    console.log(result); // 6 - 복구됨
    return new Promise((resolve) => {
      console.log('프로미스 2'); // 7
      resolve('완료');
    });
  })
  .then((result) => console.log(result)); // 8 - 완료

console.log('끝'); // 2

// ex 5)
console.log('시작');

async function fetchUser() {
  console.log('유저 정보 요청'); // 동기 코드인 끝보다 더 먼저 출력됨
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { name: '철수' };
}

async function fetchPost() {
  console.log('게시글 요청'); // 동기 코드인 끝보다 더 먼저 출력됨
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { title: '안녕하세요' };
}

setTimeout(() => console.log('타이머'), 0);

// Promise.all 내부의 async 함수들이 즉시 실행됨
Promise.all([fetchUser(), fetchPost()])
  .then(([user, post]) => {
    console.log(`${user.name}의 글: ${post.title}`);
    return Promise.race([new Promise((resolve) => setTimeout(() => resolve('느림'), 2000)), Promise.resolve('빠름')]);
  })
  .then((result) => console.log(result));

console.log('끝');
