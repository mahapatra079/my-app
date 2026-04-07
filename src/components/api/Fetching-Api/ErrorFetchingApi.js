import { useEffect, useState } from 'react';

function ErrorFetchingApi() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users1") // Intentionally wrong URL to trigger error    
      .then(res => {
        if (!res.ok) {
          throw new Error("Invalid URL or server error");
        }
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => {
        console.log("error fetching", err);
        setError(err.message);
      });
  }, []);

  return (
    <div className='card border-4 border-red-300'>
        <h2 className='font-bold text-xl mb-2'>Error Fetching API</h2>
            {/* Show error in UI */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Show users if no error */}
            {!error && (
             <ul className='flex flex-col gap-4 p-2'>                    
              {users
                  .filter(user => [1, 3].includes(user.id)) // Only show users with id 1 and 3 to demonstrate error handling
                  .map(user => ( 
                      <li key={user.id}>{user.username}</li>
                  ))}
            </ul>
        )}
    </div>
  );
}

export default ErrorFetchingApi;


// filter() is an array method
// It loops through each item
// Returns a new filtered array based on a condition
// Why: Used to select specific data from a larger dataset

// map() is an array method
// It loops through each element
// Returns a new array with the results of calling a function on every element
// Why: Used to transform data, e.g. extract specific properties or format data for display

// throw new Error() is used to manually create and throw an error.
// It stops normal execution and jumps to .catch() (or error handler).

// fetch() does NOT automatically throw error for:

  // 404
  // 500

// So we manually do it using:
  // throw new Error()

// flow
  // fetch() runs
// Response comes

// If res.ok === false
  // throw new Error(...)
  //  Goes directly to .catch()

// why we use
    // Even if API fails (404), it still goes forward