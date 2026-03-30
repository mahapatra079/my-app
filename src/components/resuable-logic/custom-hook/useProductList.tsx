import { useEffect, useState } from "react";

export const useProductList = () => {

    const [products, setProducts] = useState([]); // State to hold the list of products fetched from the API
    console.log("useProductList called", products);

    const [search, setSearch] = useState(""); // This should be a state variable that updates based on user input
    
    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
    );
    console.log("filteredProducts:", filteredProducts)

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log("error fetching products:", err));
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  console.log(products);
    // return products; // Return the products state from the custom hook
    return { filteredProducts, search, setSearch }; // Return the products state from the custom hook

};

// caching - memory storage to store previously fetched data and return it when needed, instead of making a new API call every time. 
// This can improve performance and reduce unnecessary network requests.