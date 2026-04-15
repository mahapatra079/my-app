import { useEffect, useState } from 'react';
import ErrorFetchingApi from './ErrorFetchingApi';
import FilteringAPI from './FilteringAPI';
import DynamicFilteringAPI from './DynamicFilteringAPI';
import ErrorFilteringLoadingApi from './ErrorFilteringLoadingApi';

function FetchingApi() {
  const [users, setUsers] = useState([]); // State to hold fetched users

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    fetch(`${process.env.REACT_APP_API_URL}/api/products`)     
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => {
        console.log("error fetching", err);
      });
  }, []);

  return (
    <>
      <div className='card border-8 border-gray-300'>
        <h2 className='font-bold text-xl mb-2'>API - Manually Fetching</h2>
        <div className='card border-4 border-green-300'>
            <h2 className='font-bold text-xl mb-2'>Fetching API</h2>
                <ul className='flex flex-col gap-1 p-2'>                
            {users.map(user => ( 
                  // <li key={user.id}>{user.username}</li>
                    <li key={user._id}>{user.title}: {user.summary}</li>
                ))}
              </ul>
        </div>
        <FilteringAPI />
        <ErrorFetchingApi />
        <ErrorFilteringLoadingApi />
        <DynamicFilteringAPI />
      </div>
    </>
  );
}

export default FetchingApi;