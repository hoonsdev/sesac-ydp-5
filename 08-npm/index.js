// http 모듈로 웹 서버 생성

// 클라이언트가 localhost:PORT 요청을 날림 -> 서버가 응답하고 있는 내용이 없음 -> 무한 대기 상태
// 즉, 서버에서 응답하는 내용을 작성해줘야 정상적으로 서버가 열림!

// HTTP Request/Response 양식
// : 웹에서 클라이언트와 서버가 데이터를 주고받을 때의 양식
// 헤더(header)/본문(body)
// request / response header: 요청/응답에 대한 대표 정보
// 	- 응답 헤더 > 응답 상태 코드(숫자코드)를 기입하여 보냄
// request/response body: 요청/응답에 대한 내용
const http = require('http');
const fs = require('fs'); // 파일 관련 내장 모듈
const server = http.createServer(function (req, res) {
  // res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); // 응답 헤더
  // res.write('<h1>Hello, Node.js!</h1>'); // 응답 본문
  // res.end('<p>My first node server! 우와라아아라</p>'); // 응답 본문 작성 후에 응답 종료
  try {
    // html 파일 불러오기
    const data = fs.readFileSync('./indddex.html');
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.write(data);
    res.end();
  } catch (err) {
    console.log(err);
    const errorPage = fs.readFileSync('./404.html');
    res.writeHead(404);
    res.write(errorPage);
    res.end();
  }
});
const PORT = 8000;

// request 이벤트: 클라이언트 요청
// connection 이벤트: 클라이언트가 접속(클라이언트와 서버가 연결되었을 때) 발생
server.on('request', function (req, res) {
  console.log('request 이벤트 발생!');
});
// write, end 모두 요청이므로 콘솔로그 두번 발생!

// 서버 실행
server.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});

// 10초 후 서버 종료
// setTimeout(function () {
//   console.log('10초가 지나 서버가 종료되었습니다.');
//   server.close(); // 서버 종료 메소드
// }, 10000);
