import React from 'react';

export default function List(props) {
  const { data, search } = props;

  console.log(props);
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
        {typeof search !== 'string' ? (
          <tbody>
            {(search ? search : data).map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={3}>{search}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
