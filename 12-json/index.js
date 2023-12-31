// JSON
const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;
console.log(car); // format: json

// JSON.parse(): json to js obj (역직렬화)
const obj = JSON.parse(car);
console.log(obj);

// obj는 js object이므로, [] 연산자 이용해서 키 값 접근 가능
console.log(obj.model, obj.company, obj.wow);

// JSON.stringify(): js obj to json (직렬화)
const json = JSON.stringify(obj);
console.log(json, typeof json); // string

// json 변수는 JSON 형태의 문자열이므로, [] 연산자를 이용해 키 값 접근 불가능
console.log(json.model); // undefined
console.log(json.wow); // undefined
