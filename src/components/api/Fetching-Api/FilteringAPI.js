import { useEffect, useState } from 'react';

function FilteringAPI() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")     
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => {
        console.log("error fetching", err);
      });
  }, []);

  return (
    <div className='card border-4 border-blue-300'>
        <h2 className='font-bold text-xl mb-2'>Filtering Fetching API</h2>

        <ul className='flex flex-col gap-1 p-2'>            
            {users
                .filter(user => [1, 3].includes(user.id)) // Only show users with id 1 and 3 to demonstrate error handling
                .map(user => ( 
                <li key={user.id}>{user.username}</li>
            ))}
        </ul>
    </div>
  );
}

export default FilteringAPI;