// 선택적 매개변수(?) 는 맨 뒤에 있어야 함
function print(a: number, b: number, c?: number): void {
  console.log('print() 출력 결과');
  console.log(a);
  console.log(b);
  console.log(c);
  // return a + b + (c || 0);
}
print(2, 4, 6);
print(2, 4);

function print2(a: number, b: number, c = 100): void {
  console.log('print2() 출력 결과');
  console.log(a);
  console.log(b);
  console.log(c);
  // return a + b + (c || 0);
}
print2(2, 4, 6);
print2(2, 4);

function sayHello(): void {
  console.log('Hello~');
}
sayHello();

function sayHello2(): string {
  return 'Hello~';
}
console.log(sayHello2());

function concatString(x: string, y: string) {
  return x + y;
}
console.log(concatString('hello', ' world'));

function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(5));

// 화살표 함수
const squareArea = (x: number, y: number): number => {
  return x * y;
};
console.log(squareArea(3, 4));

const triangleArea = (w: string, h: string): number => (+w * +h) / 2;
console.log(triangleArea('3', '4'));

// interface 정의 시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const sesac: Greet = {
  name: 'sesac',
  hi() {
    return '여기는 ' + this.name + '캠퍼스';
  },
  bye(a) {
    return `작별 인사를 ${a}번 했습니다`;
  },
};
console.log(sesac.hi());
console.log(sesac.bye(5));

// never
// : 함수의 끝에 절대 도달하지 않는 경우
function goingOn(): never {
  while (true) {
    console.log('go!!!');
  }
} // 무한루프에 빠져 함수의 끝에 도달할 수 없음!!

// 오버라이딩 vs. 오버로딩
// 1. 오버라이딩 (overriding.js 참고)
// - Class에서 상속 > 하위 클래스가 상위 클래스의 메소드를 상속받을 때 같은 이름의 함수(메서드)를 재정의
// 2. 오버로딩
// - 함수의 이름은 같지만, 매개변수 or 반환타입이 다른 여러 함수들을 가질 수 있음
