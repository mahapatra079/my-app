import { useState, useEffect } from "react";
import axios from "axios";

export const POSTApiFiltering = () => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [load, setLoad] = useState(true)
  const [search, setSearch] = useState("")
  const [newUser, setNewUser] = useState({ name: "", email: "" }) 

  
 useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/users")
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

    const handleNewUserChange = (e) => {
        setNewUser(
            {
                ...newUser,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users", newUser)
        .then(res => {
            setUsers([...users, res.data])
            setNewUser({ name: "", email: "" })
        })
        .catch(err => {
            setError(err.message)
        })
    }

  return (
    <div className="card">
       <h2 className="font-bold text-lg mb-5">Axios (POST) - It CREATES new data in the server. (Create Operation) </h2>
          
        {load && <p>Loading...</p>}           
        {error && <p style={{color:"red"}}>{error}</p>}             
        <p className="mb-2">{userList.length} users found</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleNewUserChange}
            required
            className="form-control mr-2 mb-5"
          />
          {/* <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleNewUserChange}
            required
            className="form-control mr-2"
          /> */}
          <button type="submit" className="addBtn">Add User</button>
        </form>

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
  );
}
