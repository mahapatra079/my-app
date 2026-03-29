import { useState } from "react";

function HoverCounter() {
    
    const [count, setCount] = useState(0);
    const handleCount = () => { 
        setCount(count + 1)
        console.log("HoverCounter rendered", count + 1);
    }
    return (
        <>
            <div className="card border-2 border-gray-300">
                <p>Count: {count}</p>  
                <button className="addBtn" onMouseOver={handleCount}>
                    Hover
                </button>
            </div>
        </>
    );
}
export default HoverCounter;