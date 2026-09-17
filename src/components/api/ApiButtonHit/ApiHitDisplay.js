// Requirements : After clicking the button, display the API response on the UI

import { useState } from "react";

function ApiHitDisplay() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      const data = await response.json();

      console.log(data);

      // Store API response in state
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <img
            src={product.image}
            alt={product.title}
            width="100"
          />
        </div>
      ))}
    </>
  );
}

export default ApiHitDisplay;