// 간단한 예제를 통한 반복문 연습!
// 데이터
let data = [
  { 회원번호: 0, 아이디: 'a', 성별: '남', 나이: 21 },
  { 회원번호: 1, 아이디: 'b', 성별: '남', 나이: 17 },
  { 회원번호: 2, 아이디: 'c', 성별: '여', 나이: 6 },
  { 회원번호: 3, 아이디: 'd', 성별: '여', 나이: 55 },
];

// 나이가 20살 이상, 여성 찾기
let women;
for (i = 0; i < data.length; i++) {
  // if (data[i].나이 >= 20) { -> 점 표기법에 한글이 들어가있어서 대괄호 표기법이 나을것 같은..
  if (data[i]['나이'] >= 20 && data[i]['성별'] === '여') {
    console.log(data[i]);
  }
}

// 나이 총 합 구하기 및 평균
let sum = 0,
  avg = 0;
for (i = 0; i < data.length; i++) {
  let age = data[i]['나이'];
  sum += age;
  avg = sum / data.length;
}
console.log(sum); // 총합
console.log(avg); // 평균나이

// 가장 큰 나이
let maxAge = data[0]['나이'];
for (i = 0; i < data.length; i++) {
  if (maxAge < data[i]['나이']) {
    maxAge = data[i]['나이'];
  }
}
console.log(maxAge);

// 가장 작은 나이
let minAge = data[0]['나이'];
for (i = 0; i < data.length; i++) {
  if (minAge > data[i]['나이']) {
    minAge = data[i]['나이'];
  }
}
console.log(minAge);

////////////////////////////////////////
// l의 개수 구하기
// let word = 'hello world!';
// let splitword = word.split('');
// let count = 0;
// for (i = 0; i < splitword.length; i++) {
//   if (splitword[i] === 'l') {
//     count += 1;
//   }
// }
// console.log(count);

let word = 'hello world!';
let count = 0;
for (i = 0; i < word.length; i++) {
  if (word[i] === 'l') {
    count += 1;
  }
}
console.log(count);
// 문자열 자체에서도 indexing 가능!

// 문자열에 있는 숫자 다 더하기
let num = '12390812476';
let stringSum = 0;
for (i = 0; i < num.length; i++) {
  stringSum += Number(num[i]);
}
console.log(stringSum);

// 평균 구하기
let arr = ['33', '29', '11', '55', '47'];
let arrSum = 0;
for (i = 0; i < arr.length; i++) {
  arrSum += Number(arr[i]);
}
console.log(`평균: ${arrSum / arr.length}`);

// 0 ~ 100 까지 짝수들의 합 구하기
// 원래 나는 %를 이용해서 조건문을 사용했지만 그렇게 하면 더 많은 연산을 하게 해서 좋지 않은 코드! 기억하도록 하자
let sum2 = 0;
for (i = 2; i <= 100; i += 2) {
  sum2 += i;
}
console.log(sum2);

// hello world 뒤집기
// 방법1
let word2 = 'hello world';
let result = '';
for (let i = word2.length - 1; i >= 0; i--) {
  result += word2[i];
}
console.log(result);

// 방법2
let result2 = '';
for (let i = 0; i < word2.length; i++) {
  result2 = word2[i] + result2; // result2 이전에 word2의 문자를 추가해줘서 뒤집기
}
console.log(result2);

// 1차원 점들이 주어졌을 때 , 그 중 가장 거리가 짧은 것의 쌍을 출력
let arr2 = [1, 3, 4, 8, 13, 17, 20];
let result3 = arr2[1] - arr2[0];
let index = 0;
for (let i = 1; i < arr2.length; i++) {
  if (result3 >= arr2[i + 1] - arr2[i]) {
    result3 = arr2[i + 1] - arr2[i];
    index = i;
  }
}
console.log(`최단 거리는 : ${result3}`);
console.log(`최단 거리 쌍은 : ${arr2[index]} ${arr2[index + 1]}`);
