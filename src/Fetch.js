import { useEffect, useState } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

//     fetch() → Promise #1
//     res.json() → Promise #2
//    .then() → handles resolved value
//     So you are already using Promises, just not creating them yourself.
    
    
    //   Fetch → Effect → State → UI
    
  return (
    <div className="fetch textCenter">
      <h3>User List - Getting the data from an API</h3>
      <ul>
        {users.map((user) => (
            <li key={user.id}>
                {user.name} <span className="ml-10">{user.username}</span>
            </li>
        ))}
      </ul>
      </div>
  );
}

export default Fetch;

// Fetching data from an API using useEffect and displaying it in a list

        // What’s happening?

        // useEffect → runs once when component mounts

        // fetch() → calls API

        // res.json() → converts response

        // setUsers() → saves data

        // React re-renders → shows list
