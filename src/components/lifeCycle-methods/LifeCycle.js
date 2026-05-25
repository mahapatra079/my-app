import { useEffect, useState } from "react";

export const LifeCycle = () => {

    const [count, setCount] = useState(0);

    const handleCycle = () => {
        setCount(count + 1);
        console.log('Button Clicked', count);
    }
    
    // Mounting
    useEffect (()=> {
        console.log('useEffect called Mounting');
    }, []) 
    // Runs once, when the component is mounted

    // Updating
     useEffect (()=> {
       console.log('useEffect called updating',count);
     }, [count]) 
    // React re-renders new state value after updating state value
    
    // Unmounting
    useEffect(() => {
        // logic for mounting or updating can be here
        return () => {
            console.log('useEffect called unmounting');
        };
    }, []);  

    // cleanup function example: setInterval and clearInterval
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Interval running");
        }, 1000);

        // CLEANUP FUNCTION: Clears the interval when component dies
        return () => clearInterval(timer); 
        }, []);

    return( 
        <div className="card">
            <h1>Life Cycle Methods</h1>
            <span>count :{ count }</span>
            <button type="button" className="addBtn" onClick={handleCycle}>LifeCycle Features</button>
        </div>
    );

}

// If you see logs twice in development:
// useEffect called Mounting
// useEffect called unmounting
// useEffect called Mounting
// This is because of React Strict Mode (dev only).
