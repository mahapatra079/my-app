import {useState,useEffect} from "react";

function ErrorFilteringLoadingApi() {
  
  const [users, setUsers] = useState([]);
  const [search,setSearch] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true) // Start with loading true to show loading state until fetch completes

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      
      .then(res => {
        if (!res.ok) {
          throw new Error("Invalid Error or secure the data")
        }
        return res.json()
      })

      .then(data => setUsers(data))

      .catch(err => {
        console.log("error fetching", err)
        setError(err.message)
      })
     
      // finally runs after .then() or .catch() regardless of success or error
      .finally(() => {
        setLoading(false);
      })
    
  }, []);
     
 const userList = users.filter (user => 
   user.username.toLowerCase().includes(search.toLowerCase())
   &&  [1, 3].includes(user.id) // Only show users with id 1 and 3 to demonstrate error handling
 )
 
 const handleSearch = (e) => {
   setSearch(e.target.value)
 }
 
  
  return( 
    <>
      <div className="card border-4 border-yellow-950">
        <h2 className="font-bold text-xl mb-2">Error Filtering Loading API</h2>

        {/* Search users AND only show users with id 1 or 3 */}
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" value={search} onChange={handleSearch} className="form-control ml-5"/>
        </div>
        
        {loading && <p className="font-bold text-lg mt-5">...Loading</p>}
        {error && <p style={{color:'red'}}>Invalid URl</p>}
        
        {/* Show users only if not loading, no error, and there are filtered users to display */}
       {!loading && !error && userList.length > 0 && ( // Only show users with id 1 and 3 to demonstrate error handling
          <ul className="ml-5">
            {userList.map(user => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        )}
      </div>  
      
  </>
);

}

export default ErrorFilteringLoadingApi;