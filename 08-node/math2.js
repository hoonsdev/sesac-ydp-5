// math module
// add 더하기 함수를 정의한 파일
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    return '나누어지는 수는 0이 아님!';
    // console.log(문자열) 이렇게 하면 문자열 출력되고 undefined도 같이 출력됨
    // 함수가 받는 return 이 없어서 문자열 자체를 return으로 받으면 된다!
  }
};

// case1. 객체로 감싸서 내보내기
// module.exports = {
//   add, // obj에서 key, value가 동일할 때 생략 가능
//   subtract,
//   multiply,
//   divide,
// };

// case2. 하나씩 내보내기
// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.multiply = multiply;
// module.exports.divide = divide;

// case2를 더 간단히!
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
