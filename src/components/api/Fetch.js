import { useState, useEffect } from "react";

function Fetch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=5")
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="card">
      <h2>Fetch API</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <h4>Notes:</h4>
        <ul>
          <li><strong>fetch:</strong> Built-in browser API to make HTTP requests</li>
          <li><strong>loading state:</strong> Shows loading indicator while fetching</li>
          <li><strong>error state:</strong> Handles and displays fetch errors</li>
          <li><strong>useEffect []:</strong> Fetches data once on component mount</li>
        </ul>
      </div>
    </div>
  );
}

export default Fetch;
