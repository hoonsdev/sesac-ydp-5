import Form from './Form';
import List from './List';
import SearchUser from './SearchUser';
import Event_ex from './ex/Event_ex';
import React, { useState } from 'react';

function App() {
  const [writerInfo, setWriter] = useState('');
  const [titleInfo, setTitle] = useState('');
  const [searchData, setSearch] = useState();
  const [dataInfo, setData] = useState([
    {
      id: 1,
      writer: '김땡땡',
      title: '안녕하세요',
    },
  ]);

  return (
    <div className="App">
      <Event_ex />
      <hr />
      <Form
        writer={[writerInfo, setWriter]}
        title={[titleInfo, setTitle]}
        data={[dataInfo, setData]}
        setSearch={setSearch}
      />
      <br />
      <SearchUser data={dataInfo} search={setSearch} />
      <br />
      <List data={dataInfo} search={searchData} />
    </div>
  );
}

export default App;
