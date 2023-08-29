const mysql = require('mysql');

const conn = mysql.createConnection({
  host: '127.0.0.1',
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

exports.deleteVisitor = (id, cb) => {
  conn.query(`delete from visitor where id = '${id}'`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model >> ', rows);
    cb(true);
  });
};

exports.editVisitor = (data, cb) => {
  // req.body가 data로 들어옴 -> id, name, comment 존재
  const { id, name, comment } = data;
  // update 구문을 통해 DB 수정
  conn.query(
    `update visitor set name='${name}', comment='${comment}' where id = '${id}'`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      // 정상적으로 처리되었다면 true 반환해서 controller에 넘겨줌.
      cb(true);
    }
  );
};
