// 실습. 합계 구하기
let sum = 0;

for (i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i;
    console.log(sum, i);
  }
}
