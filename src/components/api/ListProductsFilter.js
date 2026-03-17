import { useState, useEffect } from "react";

function ListProductsFilter() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>List Products Filter</h2>
      <input
        className="form-control"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map(product => (
          <li key={product.id}>
            {product.title} - <strong>${product.price}</strong>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <h4>Notes:</h4>
        <ul>
          <li><strong>filter:</strong> Filters products array based on search input</li>
          <li><strong>toLowerCase:</strong> Makes search case-insensitive</li>
          <li><strong>controlled input:</strong> Search input value managed by state</li>
          <li><strong>derived state:</strong> filtered is computed from products + search</li>
        </ul>
      </div>
    </div>
  );
}

export default ListProductsFilter;
