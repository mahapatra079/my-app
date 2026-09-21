// debouncing the filtering operation, not the API call.

import { useState, useEffect } from 'react';

function DebounceUpdateAPI () {

  const[search,setSearch] = useState("");
  const[products,setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [load, setLoading] = useState(true);
  const [debounceSearch, setDebounceSearch] = useState("")

  const handleSearch = (e) =>{
   setSearch(e.target.value)
  }   

  const handleSubmit = (e) =>{
     e.preventDefault();
  }

    
// Debounce: update debouncedSearch 500ms after the user stops typing

  useEffect(()=>{
      const timer = setTimeout(()=>{
          setDebounceSearch(search)
      },500);

      return () => clearTimeout(timer); // cancel the previous timer on every keystroke

  },[search])


  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(debounceSearch.toLowerCase())
  );

  useEffect(()=>{
     fetch("https://fakestoreapi.com/products")
     .then(res => {
      if(!res.ok){
        throw new Error("invalide Url")
      }
      return res.json()
     })

     .then(data => setProducts(data))

     .catch(err => {
        console.log("error",err)
        setError(err.message)
      })
     
      .finally(() => {
        setLoading(false)
      },[])

  },[])  

  return (
    <div className='card border-4 border-yellow-300'> 
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search">search</label> <br/><br/>
          <input type="text" value={search} id="name" onChange={handleSearch} className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
      </form>
       {load && <p style={{fontWeight:'Bold'}}>Loading...</p>}
      <div>
        {filteredProducts.map(product =>(
            <div key={product.id}>
              <h4> {product.title} </h4>
              <img
                src={product.image}
                alt={product.title}
                width='100'                
               />
               <p>{product.price}</p>
            </div>
        ))}
      </div>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}

export default DebounceUpdateAPI;
