//  Fetch user data from this endpoint:
// https://jsonplaceholder.typicode.com/users create table and Online/Offline status (simulated) using button
 
import { useState, useEffect } from "react";

function TabularListAPI() {
  const [users, setUsers] = useState([]);
  const [online, setOnline] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
        // the API returns an array of user objects, so we can directly set it to users state
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

export default TabularListAPI;