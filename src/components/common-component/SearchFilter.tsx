import { useState } from "react";

export const ProductListFilter = () => {

    const [name, setName] = useState("");

    const handleFFilter = (e) => {
        // Implement filter logic here
        setName(e.target.value)
    }

    return (
        <>
            <div>
                <input
                    className="mt-4 h-8 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Search products..."
                    value={name}
                    onChange={handleFFilter}
                />
            </div>
        </>
    )
}