const mysql = require('mysql');

const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'user',
  password: 'Qwer1234!@#$',
  database: 'sesac2',
});

exports.register = (data, cb) => {
  const { id, name, pw } = data;
  conn.query(
    `insert into user values (null, '${id}', '${name}', '${pw}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      cb(true);
    }
  );
};

exports.login = (data, cb) => {
  const { id, pw } = data;
  conn.query(
    `select * from user where userid = '${id}' and pw = '${pw}'`,
    (err, rows) => {
      console.log(typeof rows, rows);
      if (err) {
        throw err;
      }
      // 조회 실패 -> 빈 배열 ... 여기서 !rows: false / rows === []: false
      // 이유: 배열이 참조 타입이기 때문
      // 배열은 객체여서 객체의 비교는 참조 주소를 비교! 배열이 비어있더라도 각 빈 배열은 서로 다른 참조 주소를 가진다
      // 따라서 배열이 비어있는지 검사하기 위해서는 배열의 길이를 확인!
      if (rows.length === 0) {
        cb(false);
      }
      cb(true);
    }
  );
};
