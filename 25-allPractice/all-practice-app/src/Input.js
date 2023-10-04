function Input({ setData }) {
  const handleInput = (e) => {
    setData((data) => {
      // ...data 로 다른 데이터는 그대로 값을 가져가고, content만 따로 e.target.value로 지정하면 됨
      return { ...data, content: e.target.value };
    });
  };

  return (
    <>
      내용 :
      <input
        type="text"
        onChange={handleInput}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
