import { useProductList } from "./useProductList";

export const MarvelProducts = () => {
      const { filteredProducts, search, setSearch, loading, error } = useProductList();
  return (
    <>
      <div className="card max-w-6xl mx-auto">
        <div className="flex item-center justify-between">
            <h1 className="font-bold text-2xl">Marvel Products</h1>

            {/* Filter  */}
            <input
              className="h-8 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
         </div>
              
        {/* Product List */}
         {loading && <p className="p-4">Loading Marvel products...</p>}
         {error && <p className="p-4 text-red-600">{error}</p>}
         {!loading && !error && filteredProducts.length === 0 && (
           <p className="p-4">No Marvel products found.</p>
         )}
         {!loading && !error && filteredProducts.length > 0 && (
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
                     <p className="text-gray-600 text-lg break-words">
                       {product.summary}
                     </p>
                   )}
                 </div>
               </li>
             ))}
           </ul>
         )}
      </div>
    </>
  );
};
