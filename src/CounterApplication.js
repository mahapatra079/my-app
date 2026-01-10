//  Build a counter application with buttons to increment and decrement the count

import { useState } from "react";

function CounterApplication() {
    const [count, setCount] = useState(0);
    
    // logic
    const decrement = () => {
        if (count >0) {
            setCount(count-1)
        }
    }

  return (
    <div className="counter">
      <h4>Counter Application</h4>

      <span>Count: {count}</span>

      <button className="addBtn" onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* <button className="addBtn" onClick={() => setCount(count - 1)}>
        Decrement
      </button> */}

          <button className="addBtn" onClick={decrement}>
        Decrement
          </button>  
          {/* if (count > 0)

                count	decrement allowed
                 5       	✅
                 1   	    ✅
                 0	     ❌ (stops)
          */}
    </div>
  );
}

export default CounterApplication;
