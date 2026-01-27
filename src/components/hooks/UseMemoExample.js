import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
    return (
    <>
      <button className="addBtn" onClick={onClick}>
        Child Button
      </button>
      <p className="textCenter">(Check console — no "Child rendered" on Parent updates)</p>
    </>
  );
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
      console.log("Child clicked");
      
  }, []);

  return (
      <div className="card">
        <p className="textCenter">Memoization Example</p>
         <h2 className="textCenter">Count: {count}</h2>

          {/*avoiding unecessary rerenders when Parent State changes */}
      <button className="addBtn" onClick={() => setCount(count + 1)}>
        Increment Parent
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

// What happens?

// Click Increment Parent 👉 count changes

// Parent re-renders ✅

// Child does NOT re-render ❌
// (Check console — no "Child rendered")

// Why this works?

// React.memo → remembers the Child component

// useCallback → remembers the function

// Props don’t change → Child doesn’t re-render
