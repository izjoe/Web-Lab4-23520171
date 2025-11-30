import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.jsx";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function BlogDashboard() {
  const { data, loading, error } = useFetch(API_URL);

  return (
    <div className="card">
      <h2>Blog Dashboard</h2>
      <p>Welcome! Here are your recent posts:</p>
      {loading && <div className="loading-state">⏳ Loading posts...</div>}
      {error && <div className="error-state">❌ Error: {error.message}</div>}
      {Array.isArray(data) && (
        <ul className="post-list">
          {data.slice(0, 10).map((post) => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}