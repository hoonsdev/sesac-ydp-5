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
