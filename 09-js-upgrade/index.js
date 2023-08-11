// 구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서" 중요

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [a, b, c, d = 3] = arr2;
console.log(a, b, c, d);

const newArr = [...arr1, ...arr2];
console.log(newArr);

// 2. 객체 구조 분해 할당
//  - 변수를 선언하는 순서는 중요하지 않음.
//  - 키 값과 변수명이 일치해야함!
const obj = {
  title: '엘리멘탈',
  content: '재밌어요',
  num: 5,
};
console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);

// 객체 구조 분해 쓰고 싶다면
// key가 존재하지 않을 때를 대ㅣ하여 = 연산자를 이용하면 default 값을 할당
const { num, title, content, star = 1000 } = obj;
console.log(title, content, num, star);

// 키 값이 일치하지 않으면 undefined
const { n1, t1, c1 } = obj;
console.log(n1, t1, c1);

// 콜론(:)을 이용하면 새 변수명으로 바꿔서 저장할 수 있다!
const { num: n2, title: t2, content: c2 } = obj;
console.log(n2, t2, c2);

console.log('------------------');
// 실습
function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

console.clear();
//////////////////
// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할 (== 객체의 값을 펼친다!!)
// spread in array
const ss = [1, 2, 3];
const sdf = [4, 5];
const spread = [...ss, ...sdf];
console.log(spread);

// spread in string
const sdfsd = [...'HELLO'];
const sfasdfs = 'HELLO'.split('');
console.log(sdfsd, sfasdfs);

// spread in object
const chip = {
  base: 'chip',
  company: 'lotte',
};
const potatoChip = {
  // base: 'chip',
  // company: 'lotte',
  ...chip,
  flavor: 'potato',
};
const sweetPotatoChip = {
  // base: 'chip',
  // company: 'lotte',
  ...chip,
  flavor: 'sweet potato',
};
console.log(chip, potatoChip, sweetPotatoChip);

// rest 파라미터
// 1. 함수에서 rest를 사용할 때
const values = [10, 20, 30];
function get(a, b, ...rest) {
  console.log('a >>', a);
  console.log('b >>', b);
  console.log('rest >>', ...rest);
}
get(...values);

// 2. 객체에서 rest
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};
const { flavor, ...rest } = icecream;
console.log(flavor);
console.log(rest);

// 3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one2, two2, ...rest2] = number;
console.log(one2);
console.log(two2);
console.log(rest2);
