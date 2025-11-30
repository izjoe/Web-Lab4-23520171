import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.jsx";

export default function BlogPostDetail() {
  const { postId } = useParams();
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  return (
    <div className="card">
      <h2>Post Details</h2>
      {loading && <div className="loading-state">⏳ Loading post...</div>}
      {error && <div className="error-state">❌ Error: {error.message}</div>}
      {data && (
        <div className="post-content">
          <h3>{data.title}</h3>
          <p>{data.body}</p>
          <div className="post-meta">
            Post ID: {data.id} | User ID: {data.userId}
          </div>
        </div>
      )}
    </div>
  );
}