import { useState, useCallback } from 'react';

const Button = ({ onClick, children }) => {
  console.log(`Rendering button - ${children}`);
  return <button onClick={onClick} className="addBtn">{children}</button>;
};

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Without useCallback - creates new function on every render
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  // With useCallback - memoized function
  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="card">
      <h2>useCallback Hook Example</h2>
      
      <div>
        <h3>Count: {count}</h3>
        <p>Other State: {otherState}</p>
        
        <Button onClick={handleIncrement}>Increment (No Callback)</Button>
        <Button onClick={handleDecrement}>Decrement (With Callback)</Button>
        <Button onClick={handleReset}>Reset (With Callback)</Button>
        
        <button 
          onClick={() => setOtherState(prev => prev + 1)} 
          className="addBtn"
        >
          Update Other State
        </button>
        
        <p>Check console - memoized buttons don't re-render unnecessarily</p>
      </div>
    </div>
  );
};

export default UseCallbackExample;