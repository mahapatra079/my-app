import { useEffect, useState } from "react";

export const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    (product.title || "").toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const apiUrl = (process.env.REACT_APP_API_URL || "http://localhost:5000")
      .replace(/\/+$/, "");

    fetch(`${apiUrl}/api/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Products request failed: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Products response was not a list.");
        }

        setProducts(data);
      })
      .catch((fetchError) => {
        setError(fetchError.message || "Unable to load products.");
      })
      .finally(() => setLoading(false));
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return { filteredProducts, search, setSearch, loading, error };
};
