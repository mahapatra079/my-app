import { useState, useEffect } from "react";

function ListProductsFilter() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products)) 
      // the API returns an object with a "products" array, so we access it with data.products
      .catch(err => console.log("Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Product List</h2>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ListProductsFilter;


