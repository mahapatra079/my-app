import { useEffect, useState } from 'react';

function DynamicFilteringAPI() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [input, setInput] = useState(""); // dynamic input

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) {
          throw new Error("Invalid URL or server error");
        }
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message));
  }, []);

  // convert input string → array of numbers
  const ids = input
    .split(",") // convert string to array, e.g. "1,3" → ["1", "3"]
    .map(id => Number(id.trim())) // Removes whitespace and convert to number, e.g. ["1", "3"] → [1, 3]
    .filter(id => !isNaN(id)); // Removes invalid values, e.g. ["1", "abc"] → [1]
    
    const filterUser = user => ids.length === 0 || ids.includes(user.id); // If no input, show all users, else filter by IDs
    console.log("Filtered Users:", users.filter(filterUser)); // Debug log to check filtered users

  return (
    <div className='card border-4 border-purple-400'>
      <h2 className='font-bold text-xl'>Dynamic Filtering Fetching API</h2>

      {/* Input for dynamic filter */}
      <input
        type="text"
        placeholder="Enter IDs like 1,3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-control mb-2 mt-2"
      />

      {/* Show error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show filtered users */}
      {!error && (
        <ul>
          {users
            .filter(filterUser)
            .map(user => (
              <li key={user.id}>
                {user.id} - {user.username}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default DynamicFilteringAPI;