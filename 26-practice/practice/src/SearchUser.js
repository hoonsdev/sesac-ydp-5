import React, { useState } from 'react';

export default function SearchUser(props) {
  const dataInfo = props.data;
  const setSearch = props.search;
  // 내부 검색 위한 state
  const [category, setCategory] = useState('writer');
  const [searchKeyword, setKeyword] = useState('');
  const searchDataF = () => {
    if (!searchKeyword) {
      setSearch();
      return;
    }
    let result = dataInfo.filter((el) => {
      return el[category].includes(searchKeyword);
    });
    console.log(result);
    if (result.length > 0) {
      setSearch(result);
    } else {
      setSearch('검색 결과가 없습니다');
    }
    setKeyword('');
  };
  const allData = () => {
    setSearch();
  };
  return (
    <div>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="writer">작성자</option>
        <option value="title">제목</option>
      </select>
      <input
        type="text"
        placeholder="검색어"
        value={searchKeyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <button onClick={searchDataF}>검색</button>
      <button onClick={allData}>전체</button>
    </div>
  );
}
