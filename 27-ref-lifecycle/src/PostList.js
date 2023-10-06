import React, { useEffect, useState } from 'react';
import './PostList.css';

export default function PostList(props) {
  const { fakePosts } = props;
  const [postState, setPostState] = useState([]);
  useEffect(() => {
    console.log('마운트!!!');
    setTimeout(() => {
      setPostState(fakePosts);
    }, 2000);
  });

  return (
    <div className="container">
      <div className="listTitle">📨 Post List</div>
      <div className="postList">
        {postState.length === 0 ? (
          <p className="loading">🚗 Loading...</p>
        ) : (
          postState.map((el) => {
            return (
              <div key={el.id} className="postItem">
                <span className="postId">No. {el.id}</span>
                <span className="postTitle"> - {el.title}</span>
                <p className="postBody">
                  {el.body.length > 150
                    ? el.body.slice(0, 150) + '...'
                    : el.body}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
