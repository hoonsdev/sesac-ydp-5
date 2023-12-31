// only typescript type

// Tuple
let drink: [string, string];
drink = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';

// drink.push('야호'); // tuple 한계 -> push 할거면 tuple 쓸 이유가 없음
console.log(drink);

let drink2: readonly [string, number] = ['사이다', 2200];
// drink2.push('야호'); // error

// Tuple ex
type productInfo = [number, string, number]; // type 별칭으로 type 선언(커스터마이징)
let product1: productInfo = [1, '로지텍 버티컬', 79000];
let product2: productInfo = [2, '로지텍 k380', 52000];
// let product3: productInfo = [2, '로지텍 k380', 'Apple'] // type error

////////////////////////////////////////////////////////////
// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}
enum Cafe {
  americano = '아메리카노',
  latte = '라뗴',
}
console.log(Auth.admin);
console.log(Cafe.americano);

enum Cake {
  choco,
  vanilla,
  kiwi = '키위케이크',
}
console.log(Cake.choco); //0
console.log(Cake.kiwi); //키위케이크

//////////////////////////////////
// any
// 명시적으로
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sesac' };
// 암묵적으로
let val2;
val2 = false;
val2 = '바이';

////////////////////////////////////
// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'jinheyong',
  isPassed: true,
  // addr: 'seoul',
};

const student2: object = {
  name: 'jinheyong',
  isPassed: true,
  addr: 'seoul',
};

// interface 상속
// A+, A, B, C, D, F
// type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number; // ?: 있어도 되고 없어도 됨
  // [grade: number]: string;
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'ontani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  backNumber: 17,
  1: Score.A, // 학년: 점수
  // 2: 'NP', // error
};
console.log(otani);

otani.position = '투수';
otani['height'] = 200;
// otani.backNumber = 16; // error : backNumber readonly
console.log(otani);

// type vs. enum
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width1: Bp1 = 500;
const width2: Bp2 = Bp2.SM;

// 교차 타입
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: 'tayo',
  start() {
    console.log('출발~~');
  },
  color: 'blue',
  price: 5000,
};

// 실습
enum Category {
  Action = '액션',
  Role = '롤플레잉',
}

type Platform = '모바일' | 'PC';

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: Category;
  platform: Platform;
}

const heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: Category.Action,
  platform: '모바일',
};

const heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: Category.Role,
  platform: 'PC',
};
