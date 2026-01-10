
import { useEffect, useState } from "react";


// Use Effect And the Life Cycle Phase
function LifeCycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Updated:", count);
  }, [count]);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Update
        </button>
      </div>

 
      </>
  );
}

export default LifeCycle;