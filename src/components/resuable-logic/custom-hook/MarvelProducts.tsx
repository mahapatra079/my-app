import { useProductList } from "./useProductList";

export const MarvelProducts = () => {
  const products = useProductList(); // Custom hook to fetch product list

  console.log("marvel products rendered");
  return (
    <>
      <div className="card max-w-6xl mx-auto">
        <h1 className="font-bold text-2xl">Marvel Products</h1>
        <ul className="grid grid-cols-2 gap-4 p-4">
          {products.map(product => (
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

// filter
// pagination
// lazy loading
// caching
