const mysql = require('mysql');

const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'user',
  password: 'Qwer1234!@#$',
  database: 'sesac2',
});

exports.register = (data, cb) => {
  console.log(data);
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
