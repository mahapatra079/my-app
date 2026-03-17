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
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>
              <button onClick={handleStatus}>
                {online ? "Online" : "Offline"} 
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ApiTable;
