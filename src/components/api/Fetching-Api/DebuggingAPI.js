import { useState, useEffect } from 'react';

 const selectionIds = [1, 3, 5] // selection of product IDs to filter by, can be dynamic based on user input or other logic


function DebuggingAPI() {
  
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [error,setError] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(()=> {
     const controller = new AbortController()
        fetch("https://dummyjson.com/products", {
         signal: controller.signal
      })
    .then(res => {
      if(!res.ok){
         throw new Error("Invalid Url")  //stops here, jumps to .catch()
      }    
      return res.json()    //only runs if res.ok is true 
    })
    
    .then(data => {
      console.log("Fetched data:", data)
      setProducts(data.products)   // skipped when error is thrown
      setLoading(false)
    })
    
    .catch(err => {
       console.log(err)   //"Invalid Url" lands here
       setError(err.message)
       setLoading(false)  // Ensure loading state is updated even on error
    })
      
      return () => controller.abort()
      
  },[])
  
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
 const productList = 
      products
      .filter(product => selectionIds.includes(product.id))
      .filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
   )
   console.log("Fetched filter products", productList)     
      
  return (
    <div className='card border-4 border-red-300 mb-3'>
      <h2 className='font-bold text-xl mb-2'>Debugging API</h2>
      
        {error && <p style={{color:"red"}}>{error}</p>}
        
        <input type="text" id="name" value={search} onChange={handleSearch} className='form-control mb-3'/>
        {loading && <p>Loading...</p>}
    
        {!error && (
            <ul>
            {productList.map(product =>
                <li key={product.id}>{product.title} - {product.price}</li>
            )}
            </ul>
        )}
        
    </div>
  )
}

export default DebuggingAPI;


// throw — stops code execution and sends an error to the nearest .catch()
// new — creates a new object
// Error — a built-in JavaScript class for representing errors


// Concepts Covered Here
    // React useState
    // React useEffect
    // API Fetching
    // Error Handling
    // Conditional Rendering
    // Search Filtering
    // Array filter()
    // Controlled Input
    // Component Re-rendering
    

//Overview

    // I used useEffect to fetch API data on component mount.
    // useState manages products, loading, error, and search state.
    // I filtered products using selected IDs and implemented search functionality using includes().
    // I also handled API errors and loading states properly