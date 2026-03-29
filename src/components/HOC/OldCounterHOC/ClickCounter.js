import { useState } from "react";

function ClickCounter() {
    
    const [count, setCount] = useState(0);
    const handleCount = () => { 
        setCount(count + 1)
        console.log("ClickCounter rendered", count + 1);
    }


    return (
        <>
            <div className="card border-4 border-gray-300">
                <p>Count: {count}</p>  
                <button className="addBtn" onClick={handleCount}>click</button>
            </div>
        </>
    );
}
export default ClickCounter;