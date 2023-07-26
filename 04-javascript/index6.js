// 조건문

// if문
// if (5 > 3) {
//   console.log('3141');
// }

// let number = Number(prompt('숫자를 입력해주세요'));
// 1. prompt로 사용자로부터 값을 입력받고(문자열)
// 2. Number() 문자열 -> 숫자형 형변환

// if (number > 10) {
//   console.log('입력한 수는 10보다 크군요!');
// } else {
//   console.log('입력한 수는 10보다 작거나 같네요!');
// }

// if (number > 10) {
//   console.log('입력한 수는 10보다 크군요!');
// } else if (number === 10) {
//   console.log('10을 입력하셨네요!');
// } else {
//   console.log('입력한 수는 10보다 작네요!');
// }

// if (number > 100 || number < 0) {
//   console.log('입력값이 잘못 되었습니다. 숫자의 범위는 0 ~ 100까지 입니다');
// } else if (number >= 90) {
//   console.log('A');
// } else if (number >= 80) {
//   console.log('B');
// } else if (number >= 70) {
//   console.log('C');
// } else if (number >= 60) {
//   console.log('D');
// } else {
//   console.log('F');
// }

// 중첩 if문
// let userId = 'user1';
// let userPW = '1234';

// // id, pw 검사하는 함수
// function loginUser() {
//   let inputId = prompt('아이디 입력');
//   let inputPW = prompt('비밀번호 입력');

//   // - userId와 inputId가 같다면
//   //    - userPW와 inputPW 를 비교
//   // - inputId에 빈값 입력됐다면
//   //    - '아이디 입력 안함' 문구 반환
//   // - 두 경우가 아니라면 (inputId가 틀렸을 때)
//   //    - '아이디 틀림' 문구 반환

//   if (userId === inputId) {
//     if (userPW === inputPW) {
//       return '로그인 성공';
//     } else {
//       return '비번 오류! 로그인 실패';
//     }
//   } else if (inputId === '') {
//     return '아이디 입력 안했음!';
//   } else {
//     return '아이디 오류! 로그인 실패';
//   }
// }
// const result = loginUser();
// // -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
// console.log(result);

// switch 문
// - 하나 이상의 case 문으로 구성
// - default 필수는 아니지만, 쓰길 권장
// - 여러개의 case 문을 묶을 수도 있다
// break: 조건을 빠져나갈때 사용하는 키워드
let a = 3;
switch (a) {
  case 1:
  case 2:
  case 3:
    console.log('a가 1~3이군요!');
    break;
  case 4:
    console.log('a가 4이군요!');
    break;
  case 5:
    console.log('a가 5이군요!');
    break;
  default:
    console.log('a가 무슨 값인지 모르겠습니다');
    break;
}

// 퀴즈. 학점 계산기
// 0~100 이외 숫자는 들어오지 않는다고 가정
let score = 90;

switch (parseInt(score / 10)) {
  case 6:
    console.log('D');
    break;
  case 7:
    console.log('C');
    break;
  case 8:
    console.log('B');
    break;
  case 9:
  case 10:
    console.log('A');
    break;
  default:
    console.log('F');
    break;
}

// 삼항 연산자
let num = 8;
if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}
// 조건 ? 참일 때 실행 : 거짓일 때 실행
num % 2 === 1 ? console.log('홀수') : console.log('짝수');
