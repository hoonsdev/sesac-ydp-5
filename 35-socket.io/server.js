const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 8080;

// 사용자 닉네임 모음 객체
const nickObjs = {}; // { socket.id: nick1, socket.id: nick2, ... }

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

function updateList() {
  io.emit('updateNicks', nickObjs); // 전체 사용자 닉네임 모음 객체 전달
}

// io.on(): socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
  // connection 이벤트는 클라이언트가 접속했을 때 발생
  // 콜백 함수의 인자로 소켓 객체를 제공

  console.log('서버 연결 완료 :: ', socket.id);
  // socket.id: 소켓 고유 아이디 (브라우저 탭 단위)

  // [실습1]
  // socket.on('hello', (data) => {
  //   console.log(`${data.who} : ${data.msg}`);
  //   socket.emit('helloKr', { who: 'hello', msg: '안녕!!!!' });
  // });

  // socket.on('study', (data) => {
  //   console.log(`${data.who} : ${data.msg}`);
  //   socket.emit('studyKr', { who: 'study', msg: '반가워요~' });
  // });

  // [실습3] 채팅창 입장 안내 문구
  // io.emit('notice', `${socket.id}님이 입장하셨습니다.`);

  // [실습3-2]
  socket.on('setNick', (nick) => {
    console.log(`닉네임 설정 완료 :: ${nick}님 입장`);
    if (Object.values(nickObjs).find((value) => value === nick)) {
      socket.emit('error', '닉네임 중복!');
    } else {
      nickObjs[socket.id] = nick;
      console.log('접속 유저 목록 :: ', nickObjs);
      io.emit('notice', `${nick}님이 입장하셨습니다.`);
      socket.emit('entrySuccess', nick); // 해당 소켓 데이터 전송
      updateList();
    }
  });

  // [실습3-3] 클라이언트 퇴장시
  // notice 이벤트로 퇴장 공지
  socket.on('disconnect', () => {
    console.log('접속 끊김 :: ', socket.id);
    io.emit('notice', `${nickObjs[socket.id]} 님이 퇴장하셨습니다.`);
    delete nickObjs[socket.id];
    updateList();
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
