import React from 'react';

export default function PostItem({ post }) {
  return (
    <>
      {post.length === 0 ? (
        <p className="loading">🚗 Loading...</p>
      ) : (
        post.map((el) => {
          return (
            <div key={el.id} className="postItem">
              <span className="postId">No. {el.id}</span>
              <span className="postTitle"> - {el.title}</span>
              <p className="postBody">
                {el.body.length > 150 ? el.body.slice(0, 150) + '...' : el.body}
              </p>
            </div>
          );
        })
      )}
    </>
  );
}
