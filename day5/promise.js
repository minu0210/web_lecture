// js에서 비동기 구현
// 1. callback (수업시간에 다루지 않음)
// 2. Promise (ES6 표준 채택)
// 3. Async & Await (ES8)

// 현재 작업을 비동기적으로 처리하고 있는 상황
// 1. 작업 중 (pending) -> 성공 및 실패 여부가 결정되지 않은, promise 객체가 실행중
// 2. 작업 완료 & 성공 -> 작업 완료! 성공했다 + 값 (resolve)
// 3. 작업 완료 & 실패 -> 작업 완료 실패 + 왜 실패? 여러 객체 (reject)

// Promise 객체를 만들어 병렬로 수행할 작업을 적어줌
const p1 = new Promise(function (resolve) {
  // 작업
  setTimeout(() => resolve("p1 객체가 작업이 성공적으로 완료됨"), 3000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("p2 객체 작업이 성공적으로 완료됨"), 4000);
});

// const p3 = new Promise((reject) => {
//   setTimeout(() => reject(new Error("p3 객체 작업 중 에러 발생"), 1000));
// });

// p3.then(null, (reject) => console.log(reject));

// 작업이 완료된 후 어떻게 처리해줄지 (소비자 관점)

console.time("test");

// 모든 promise 객체(p1, p2)가 완료되었을 때
Promise.all([p1, p2]).then(([resolve1, resolve2]) => {
  console.log(resolve1, resolve2);
  console.timeEnd("test");
});

// then, catch, finally를 모두 사용해보기
new Promise((resolve, reject) => {
  setTimeout(() => resolve("결과값"), 1000);
  //   setTimeout(() => reject(new Error("에러 발생!"), 2000));
})
  .finally(() => console.log("promise가 준비됨"))
  .then((result) => console.log(result));

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  });

/* // 체이닝이 적용되지 않은 사례

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
  console.log(result);
  return result * 2;
});

promise.then(function (result) {
  console.log(result);
  return result * 2;
});

promise.then(function (result) {
  console.log(result);
  return result * 2;
});

*/
