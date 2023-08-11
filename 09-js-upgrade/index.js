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

/////////////////////////
// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 현실 세계의 객체를 만들어보자!
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/
class House {
  // 생성자 함수
  // : 클래스를 이용해 객체를 생성할 때 마다 속성을 초기화
  constructor(year, name, window) {
    this.name = name;
    this.year = year;
    this.window = window;
  }

  // 메서드 1: 집의 나이를 출력
  getAge() {
    console.log(`${this.name}는 건축한지 ${2023 - this.year}년 되었어요!`);
  }

  // 메서드 2: 집의 창문 개수 출력
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
  }
}

// 클래스(틀)를 이용해 객체를 찍어보자(생산해보자!)
const house1 = new House(1990, '롯데캐슬', 1);
console.log('house1 >>', house1);
console.log(typeof house1);
console.log(house1.year);
house1.getAge();
house1.getWindow();

// house2: 2007년에 지어진 "자이" 이름이고, 창문은 10개
const house2 = new House(2007, '자이', 10);
console.log(house2);
house2.getAge();
house2.getWindow();

// 클래스 상속
// 부모 클래스: House
// 자식 클래스: Apartment
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    // 부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자를 호출
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}에 지어진 ${this.name} 아파트의 
        총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}`;
  }

  getWindow() {
    return `${this.name} 아파트의 ${this.window} 개의 창문은
      ${this.windowMaker} 회사에서 생산되었습니다.`;
  }
}

const apt1 = new Apartment(2022, '래미안', 3, 20, 'KCC');
console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());
