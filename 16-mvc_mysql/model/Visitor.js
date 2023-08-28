const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'Qwer1234!@#$',
  database: 'sesac2',
});

exports.getVisitors = (cb) => {
  conn.query(`select * from visitor`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('Visitor.js: ', rows);
    cb(rows);
  });
};

exports.postVisitor = (data, cb) => {
  // 매개변수
  // data: 프론트에서 유저가 입력한 값 (req.body)
  // cb: query 실행 후 호출할 함수
  conn.query(
    `insert into visitor values (null, "${data.name}", "${data.comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('model >> ', rows);
      cb(rows.insertId);
    }
  );
};
