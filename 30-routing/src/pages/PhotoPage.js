import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoList from '../components/PhotoList';

export default function PhotoPage() {
  const [photoInfos, setPhotoInfos] = useState([]);
  const getPhotos = async () => {
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/photos', {
        params: {
          _limit: 10,
        },
      });
      setPhotoInfos(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <span>여기는 사진 목록</span>
      <PhotoList photoInfos={photoInfos} />
    </div>
  );
}
