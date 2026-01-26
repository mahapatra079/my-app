
import { useState } from 'react'
export const StateCounter = () =>{
    // const [count, setCount] = useState(0);
    // currentValue, setterFunction = useState(initialValue)

    // const handleStateCounter = ()=>{
    //     setCount(count + 1);
    // }

     const [count, setCount] = useState(()=>{
         // currentValue, setterFunction = useState(fn)
         console.log("initial state function called")
        return 0;
     });

     console.log("Counter component rendered with count:",count)

    const handleStateCounter = ()=>{
        setCount(count + 1);
    }
    return(
        <>
            <div className="counter">
                <h3>State Management - with state</h3>
                <p>Counter: {count}</p>
                <button type="button" className="addBtn" onClick={handleStateCounter}>Counter</button>
            </div>
        </>
    )
}

// this is the real time example how  the state is for changng its state value and rendered in ui  
// setState = trigger for UI update
// Re-render = React runs component again with new state