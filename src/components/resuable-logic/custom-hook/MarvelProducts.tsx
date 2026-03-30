import { useProductList } from "./useProductList";

export const MarvelProducts = () => {
    // const products = useProductList(); // Custom hook to fetch product list
      const { filteredProducts, search, setSearch } = useProductList(); // Custom hook to fetch product list and manage search state
      console.log("marvel products rendered", filteredProducts);
  return (
    <>
      <div className="card max-w-6xl mx-auto">
        <h1 className="font-bold text-2xl">Marvel Products</h1>

        {/* Filter  */}
        <div>
          <input
            className="mt-4 h-8 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Product List */}
        <ul className="grid grid-cols-2 gap-4 p-4">
          {filteredProducts.map((product) => (
            <li
              className="bg-white shadow-md rounded-lg p-4 border-2 border-lime-300"
              key={product._id}
            >
              <h2 className="font-medium mb-2 text-xl">{product.title}</h2>
              <div className="flex items-start gap-4 mb-2">
                {product.image && (
                  <img src={product.image} alt={product.title} width="100" />
                )}
                {product.summary && (
                  <p className="text-gray-600 text-lg">{product.summary}</p>
                )}
                {/* conditional rendering using logical AND (&&) */}
                {/* JavaScript evaluates the left side first → product.summary */}
                {/* If it is truthy → React renders the element */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// I separated concerns by extracting API fetching logic into a custom hook (useProductList). 
// This keeps my component clean and reusable. The component focuses only on UI, while the hook handles side effects and state management

// filter
// pagination
// lazy loading
// caching
