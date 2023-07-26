// 반복문

// for문
for (let i = 0; i < 10; i++) {
  // i가 0 ~ 9 .. 총 10번 반복
  console.log('안녕', i);
}
console.log('---------------');

for (let i = 0; i < 10; i += 2) {
  // i가 0 2 4 6 8 ... 총 5번 반복
  console.log('안녕', i);
}
console.log('---------------');

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('---------------');

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log('---------------');

// 1부터 n까지의 합 구하기
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
console.log('---------------');

// 배열, for문
const fruits = ['사과', '배', '포도', '망고'];
console.log(fruits.length); // 배열의 원소 개수 = 배열 크기(길이)
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log('---------------');

// 1 ~ 20 중에서 짝수일 때의 합 구하기
let sum2 = 0;
// - 1 ~ 20까지 숫자를 반복
// - 현재 반복 숫자가 짝수라면 sum2에 더하기
for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 += i;
    console.log(i, sum2);
  }
}
console.log('---------------');

// while 문
let idx = 0;
while (idx < 10) {
  console.log('안녕', idx);
  idx++;
}
console.log('---------------');

let idx2 = 0;
while (true) {
  // 의도적으로 무한루프 (무한루프에 빠졌다면 브라우저 닫고 다시 실행하기)
  console.log('안녕2', idx2);
  idx2++;

  // 무한루프를 빠져나오는 조건
  if (idx2 === 10) {
    break;
  }
}
console.log('---------------');

// continue 를 이용해 0 ~ 99 까지 중에서 홀수의 합
let sum3 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue; // 이번 반복회차 스킵
  }
  sum3 += i;
  console.log(sum3, i);
}
console.log(sum3);
