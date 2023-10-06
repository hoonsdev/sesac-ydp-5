import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PostList.css';
import PostItem from './PostItem';

export default function PostList() {
  const [postState, setPostState] = useState([]);
  useEffect(() => {
    console.log('마운트!!!');
    setTimeout(async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPostState(res.data);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <div className="listTitle">📨 Post List</div>
      <div className="postList">
        <PostItem post={postState} />
      </div>
    </div>
  );
}
