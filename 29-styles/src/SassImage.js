import React from 'react';
import './styles/SassImage.scss';

export default function SassImage() {
  return (
    <div>
      <h1>SassImage</h1>
      <div className="imgContainer">
        <img src={process.env.PUBLIC_URL + '/images/img1.jpeg'} alt="img1" />
        <img src={process.env.PUBLIC_URL + '/images/img2.jpeg'} alt="img1" />
        <img src={process.env.PUBLIC_URL + '/images/img3.jpeg'} alt="img1" />
        <img src={process.env.PUBLIC_URL + '/images/img4.jpeg'} alt="img1" />
        <img src={process.env.PUBLIC_URL + '/images/img5.jpeg'} alt="img1" />
      </div>
    </div>
  );
}
