import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

function CustomHooks() {
  const { data, loading, error } = useFetch("https://dummyjson.com/posts?limit=5");

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="card">
      <h2>Custom Hooks</h2>
      <ul>
        {data.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <h4>Notes:</h4>
        <ul>
          <li><strong>Custom Hook:</strong> A function starting with "use" that uses built-in hooks</li>
          <li><strong>Reusable:</strong> useFetch can be used in any component with any URL</li>
          <li><strong>Encapsulation:</strong> Hides fetch logic, exposes only data, loading, error</li>
          <li><strong>Convention:</strong> Must start with "use" so React can apply hook rules</li>
        </ul>
      </div>
    </div>
  );
}

export default CustomHooks;
