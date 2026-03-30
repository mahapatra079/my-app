import { useEffect, useState } from "react";

export const useProductList = () => {

    const [products, setProducts] = useState([]);

    console.log("useProductList called");

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log("error fetching products:", err));
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  console.log(products);
  return products; // Return the products state from the custom hook
};

// caching - memory storage to store previously fetched data and return it when needed, instead of making a new API call every time. 
// This can improve performance and reduce unnecessary network requests.