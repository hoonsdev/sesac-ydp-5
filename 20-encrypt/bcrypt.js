const bcrypt = require('bcrypt');

const originalPassword = '1234'; // 원본 비번
const saltRounds = 10; // 솔트 라운드 수를 정의

function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}

function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

// 사용 예제
// 원본 비번을 해싱한 결과
const hashedPassword = hashPassword(originalPassword);
console.log(`Hashed Password: ${hashedPassword}`);

// 언본 비번이랑 해시된 비번이 일치하는지 확인
const isMatch = comparePassword(originalPassword, hashedPassword);
console.log(`두 비밀번호의 일치 여부 : ${isMatch}`);
