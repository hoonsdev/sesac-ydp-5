import React from 'react';

export default function PhotoList({ photoInfos }) {
  return (
    <div>
      {photoInfos.map((photo) => {
        return (
          <ul key={photo.id}>
            <li>
              <h3>사진 제목: {photo.title}</h3>
              <img src={photo.url} alt="photoImg" />
            </li>
          </ul>
        );
      })}
    </div>
  );
}
