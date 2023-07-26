// 실습. 13의 배수이자 홀수인 수 찾기
for (i = 0; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 == 1) {
    console.log(`10000 이하의 수 중 13의 배수이자 홀수인 수 : ${i}`);
  }
}

// prompt를 이용한 숫자 찾기 프로그램
const num = Number(prompt('숫자를 입력해주세요!'));

const targetNum = (num2) => {
  for (i = 0; i <= num2; i++) {
    if (i % 13 === 0 && i % 2 == 1) {
      console.log(`입력하신 숫자 이하의 수 중 13의 배수이자 홀수인 수 : ${i}`);
    }
  }
};
targetNum(num);
