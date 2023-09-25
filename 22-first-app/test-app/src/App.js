// import logo from './logo.svg';
import './App.css';
import './bug.css';

function App() {
  const name = '김태훈';
  const student = 'sesac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: '48px',
  };
  const petName = '포키';
  const animal = '강아지';
  const a = 3,
    b = 5;
  const title = 'Hello World';
  return (
    <div className="App">
      {/* 자동 생성 class */}
      {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* JSX 문법 */}
      {/* 하나로 감싸인 요소 */}
      <>
        {/* js 문법 사용
          - {}로 감싸면 js표현식 사용 가능
          - {}안에서 삼항 연산자 사용 가능 (if, for문 사용 불가) */}
        <div>{name} 안녕?</div>
        <div>
          {student === 'sesac' ? <span>새싹인</span> : <span>새싹인 아님</span>}
        </div>

        {/* 3. style 속성
          - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용
          - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성해야 함 (ex. backgroundColor)
        */}
        <div style={styles}>스타일 적용</div>
        <div
          style={{
            backgroundColor: 'yellow',
            color: 'blue',
            fontSize: '48px',
          }}
        >
          스타일 적용2
        </div>
        {/* 실습 */}
        <div>
          이것은 div입니다!
          <h3>이것은 div 안에 있는 h3 태그입니다!</h3>
        </div>
        <h2>
          제 반려 동물의 이름은 <u>{petName}</u>입니다. <br /> <u>{petName}</u>
          은 <u>{animal}</u>
          입니다.
        </h2>
        <div>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</div>
        <div>{a > b ? 'a가 b보다 큽니다!' : 'dd'}</div>
        <div>
          <div className="test">{title}</div>
          <br />
          <label for="input1">아이디 : </label>
          <input className="input" id="input1" />
          <br />
          <label for="input2">비밀번호 : </label>
          <input className="input" id="input2" />
        </div>
        <div className="colorBox">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="yellow"></div>
          <div className="green"></div>
          <div className="blue"></div>
          <div className="navy"></div>
          <div className="purple"></div>
        </div>
        <div className="total-body">
          <div className="body">
            <div className="eye-white">
              <div className="eye-black"></div>
            </div>
          </div>
          <div className="body body2"></div>
          <div className="body body3"></div>
          <div className="body body4"></div>
          <div className="body body5"></div>
        </div>
        {/* 4. className 사용
            - class 속성이 아닌 className 속성 사용 (ex. <div className='App'>)
            
            5. 종료 태그가 없는 태그 사용
            - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
            - <input /> or <input></input>

            6. 주석
            - // : jsx 외부 주석
            - {슬래쉬* *슬래쉬} : jsx 내부 주석
        */}
      </>
    </div>
  );
}

export default App;
