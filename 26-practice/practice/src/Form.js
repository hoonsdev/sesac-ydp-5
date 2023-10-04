import React from 'react';

export default function Form(props) {
  // console.log(props);
  const [writerInfo, setWriter] = props.writer;
  const [titleInfo, setTitle] = props.title;
  const [dataInfo, setData] = props.data;
  const setSearch = props.setSearch;
  // console.log(props.writer, props.title, props.data);
  const addData = () => {
    const newData = dataInfo.concat({
      id: dataInfo.length + 1,
      writer: writerInfo,
      title: titleInfo,
    });
    if (writerInfo && titleInfo) {
      setData(newData);
      setWriter('');
      setTitle('');
      setSearch();
    } else {
      return;
    }
  };
  return (
    <fieldset>
      <label htmlFor="writer">작성자 : </label>
      <input
        id="writer"
        type="text"
        value={writerInfo}
        onChange={(e) => {
          setWriter(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) {
            return;
          }
          if (e.code === 'Enter') {
            addData();
          }
        }}
      />
      <label htmlFor="title">제목 : </label>
      <input
        id="title"
        type="text"
        value={titleInfo}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) {
            return;
          }
          if (e.code === 'Enter') {
            addData();
          }
        }}
      />
      <button onClick={addData}>작성</button>
    </fieldset>
  );
}
