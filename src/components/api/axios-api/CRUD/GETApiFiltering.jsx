import { useState, useEffect } from "react";
import axios from "axios";
import { POSTApiFiltering } from "./POSTApiFiltering";
import { PUTApiFiltering } from "./PUTApiFiltering";

export const GETApiFiltering = () => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [load, setLoad] = useState(true)
  const [search, setSearch] = useState("")

 useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users") // Fetch Data - used to get data from server
        .then(res => {
            setUsers(res.data) 
            setLoad(false)
        })
        .catch(err => {
            setError(err.message)
            setLoad(false)
        })
    }, [])
  
  const userList = users.filter( user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )
  
  const handleChange = (e) => {
     setSearch(e.target.value)
  }

  return (
    <div className="card">
        <h1 className="font-bold text-lg">User Filtering API - CRUD FLOW</h1>
        <div className="card">
            <h2 className="font-bold text-lg mb-5">Axios (GET) - use to GET the data from the server. (Read Operation)</h2>
            
            {load && <p>Loading...</p>}           
            {error && <p style={{color:"red"}}>{error}</p>}             
            <p>{userList.length} users found</p>

            <input
                className="form-control mt-5 mb-5"
                type="text"
                placeholder="search..."
                value={search}
                onChange={handleChange}
            />
        
            <ul>
                {!load && !error && 
                userList
                .map(user =>         
                <li key={user.id}>{user.name}</li>           
                )}
            </ul>            
        </div>
      <POSTApiFiltering />
      <PUTApiFiltering/>
    </div>  
  );
}
