import React, { useState, useEffect } from "react";

export default function Section3() {
  const [postId, setPostId] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset all states when postId changes
    setLoading(true);
    setError(null);
    setData(null);

    // Fetch post data
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        // Manual check for HTTP errors (404, 500, etc.)
        // fetch doesn't reject on HTTP errors, must check response.ok
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }
        // Parse JSON manually (unlike axios which does it automatically)
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [postId]);

  return (
    <div className="card">
      <h2>📝 PostFetcher</h2>
      
      <div className="controls">
        <label>Post ID: </label>
        <input 
          type="number" 
          min="1" 
          max="100" 
          value={postId} 
          onChange={(e) => setPostId(e.target.value)}
          style={{width: '80px', marginLeft: '8px'}}
        />
      </div>

      {loading && <div className="loading-state">⏳ Loading...</div>}
      {error && (
        <div className="error-state">
          <strong>❌ Error:</strong> {error.message}
        </div>
      )}
      {data && (
        <div className="post-content">
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}
