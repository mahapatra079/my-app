import { useState, useEffect } from "react";

function ApiTable() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then(res => res.json())
      .then(data => setComments(data.comments))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div className="card">
      <h2>Comments Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Comment</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {comments.map(comment => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.body}</td>
              <td>{comment.user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <h4>API Fetching Notes:</h4>
        <ul>
          <li><strong>useState([]):</strong> Initialize empty array for comments</li>
          <li><strong>useEffect:</strong> Runs once after component mounts (empty dependency [])</li>
          <li><strong>fetch:</strong> Makes HTTP GET request to API</li>
          <li><strong>setComments:</strong> Updates state with fetched data, triggers re-render</li>
          <li><strong>map:</strong> Iterates over comments array to render table rows</li>
        </ul>
      </div>
    </div>
  );
}

export default ApiTable;
