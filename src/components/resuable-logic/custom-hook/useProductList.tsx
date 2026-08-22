import { useEffect, useState } from "react";

export const useProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        const apiUrl = (process.env.REACT_APP_API_URL || "http://localhost:5000").replace(/\/$/, "");

        const loadProducts = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/products`, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(`Products request failed with status ${response.status}`);
                }

                const data = await response.json();
                if (!Array.isArray(data)) {
                    throw new Error("Products API returned an invalid response");
                }

                setProducts(data);
            } catch (fetchError) {
                if (fetchError.name !== "AbortError") {
                    setError("Unable to load Marvel products. Make sure the API server is running.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        loadProducts();

        return () => controller.abort();
    }, []);

    const filteredProducts = products.filter((product) =>
        typeof product.title === "string" &&
        product.title.toLowerCase().includes(search.toLowerCase()),
    );

    return { filteredProducts, search, setSearch, loading, error };

};