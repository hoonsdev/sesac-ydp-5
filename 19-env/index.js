// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); // .env 파일의 환경변수를 읽어옴

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.NODE2);
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
