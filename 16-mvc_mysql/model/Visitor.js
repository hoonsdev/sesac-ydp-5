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
