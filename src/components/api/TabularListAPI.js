import { useState, useEffect } from "react";

function TabularListAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users?limit=${limit}&skip=${(page - 1) * limit}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setLoading(false);
      });
  }, [page]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>Tabular List API</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button className="addBtn" onClick={() => setPage(p => p - 1)} disabled={page === 1}>Prev</button>
        <span>Page {page}</span>
        <button className="addBtn" onClick={() => setPage(p => p + 1)}>Next</button>
      </div>

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <h4>Notes:</h4>
        <ul>
          <li><strong>pagination:</strong> skip = (page - 1) * limit to offset API results</li>
          <li><strong>page dependency:</strong> useEffect re-runs when page changes</li>
          <li><strong>limit & skip:</strong> API query params to control data range</li>
        </ul>
      </div>
    </div>
  );
}

export default TabularListAPI;
