// 프로미스 연습하기
// let promise = new Promise((resolve, reject) => {
//   resolve(1);
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then((result) => {
//   console.log(result)
// });
// 첫 번째 reject / resolve 호출만 고려대상 -> 두 번째 resolve 무시
//////////////////////

// 콜백을 이용한 비동기 처리
// function delay(ms, callback) {
//   console.log('반갑습니다!');
//   callback(ms);
// }
// delay(3000, function (ms) {
//   setTimeout(() => {
//     console.log('안녕하세요!');
//   }, ms);
// });

// 프로미스를 이용한 비동기 처리
// const delay = (ms) => {
//   return new Promise((resolve, reject) => {
//     console.log('반갑습니다!');
//     resolve(ms); // ms 값을 result로 가져감. delay 함수 안에서 할거는 끝났어~ 이제 다음 타자 하고싶은거 이거 값 가져다가 써라!
//   });
// };
// delay(3000).then((result) => {
//   // console.log('반갑습니다') 실행 후 ms값(=3000)을 result로 가져와서 다음 익명함수가 result 값 사용
//   setTimeout(() => {
//     console.log('안녕하세요!');
//   }, result); // 이 익명함수는 setTimeout 함수임. delay 함수 끝나고 3초(result값) 뒤 안녕하세요 출력
// });

// 프로미스로 애니메이션이 적용된 원 만들기

// 실행 코드
const showCircle = (cx, cy, radius) => {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.classList.add('circle');
  document.body.append(div);

  // 지금 여기선 트랜지션 효과를 빼서 의미가 없을지도 모르지만, 비동기적으로 처리하고 싶은게 클릭했을 때 트랜지션 효과를 주는거
  // 맨위에 return ~ 작성하면 요소 생성하고 이런것도 다 비동기적으로 처리돼서 의미가 없나.. 아님 효과가 없나..
  // 쨋든 이런 느낌으로 하는듯..?
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
      resolve(div);
    }, 3000);
  });
};

showCircle(150, 150, 100).then((result) => {
  setTimeout(() => {
    result.innerText = 'Hello World';
  }, 1000);
});
