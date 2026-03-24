import React, { useState, useEffect } from "react";

function ApiTable() {
  const [users, setUsers] = useState([]);
  const [online, setOnline] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("error fetching:", error));
  }, []);

  const handleStatus = () => {
    setOnline(!online);
  };

  return (
    <div className="card">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px 12px', backgroundColor: '#f4f4f4', fontWeight: '600' }}>Name</td>
            <td style={{ border: '1px solid #ddd', padding: '8px 12px', backgroundColor: '#f4f4f4', fontWeight: '600' }}>Status</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px 12px' }}>{user.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px 12px' }}>
                <button onClick={handleStatus}>
                  {online ? "Online" : "Offline"} 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiTable;
