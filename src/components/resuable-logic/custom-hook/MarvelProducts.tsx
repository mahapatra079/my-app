import { useEffect, useState } from "react";

export const MarvelProducts = () => { 
       
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, [])

    return (
      <>
        <div className="cards">
          <ul className="flex  gap-5">
            {products.map((product) => (
              <li key={product._id}>
                {product.title} {product.image && <img src={product.image} alt={product.title} width="100" />}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}