import React from 'react';

export default function List(props) {
  const dataInfo = props.data;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        <tbody>
          {dataInfo.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.writer}</td>
                <td>{el.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
