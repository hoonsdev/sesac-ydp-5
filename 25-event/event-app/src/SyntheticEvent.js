export default function SyntheticEvent() {
  const syntheticEvent = (e) => {
    console.log('Synthetic Event 버튼 클릭!', e);
    // 콘솔에 찍히는 e 객체는 합성 이벤트
    // 브라우저마다 이벤트 이름과 종류 등 이벤트를 처리하는 방식이 다르기 때문에
    // 이를 동일하게 처리하기 위해 React에서 사용하는 이벤트 객체
    // e.preventDefault()
  };
  const printInputValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <button onClick={syntheticEvent}>SyntheticEvent 콘솔에 찍기</button>
      <br />
      <input type="text" placeholder="입력하세요" onChange={printInputValue} />
    </div>
  );
}
